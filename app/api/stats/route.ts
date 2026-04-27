import { NextResponse } from 'next/server';

const CONTRACT = '0xF476BA983DE2F1AD532380630e2CF1D1b8b10688';
const BASE_RPC = 'https://mainnet.base.org';

async function ethCall(selector: string): Promise<bigint> {
  const res = await fetch(BASE_RPC, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      jsonrpc: '2.0',
      method: 'eth_call',
      params: [{ to: CONTRACT, data: selector }, 'latest'],
      id: 1,
    }),
    next: { revalidate: 120 }, // cache 2 min on server
  });
  const json = await res.json();
  if (!json.result || json.result === '0x') throw new Error('Empty RPC result');
  return BigInt(json.result);
}

export async function GET() {
  try {
    const [rawSupply, rawDecimals] = await Promise.all([
      ethCall('0x18160ddd'), // totalSupply()
      ethCall('0x313ce567'), // decimals()
    ]);

    const decimals = Number(rawDecimals);
    const divisor = 10 ** decimals;
    const supply = Number(rawSupply) / divisor;

    return NextResponse.json(
      { supply, decimals, contract: CONTRACT, chain: 'base', updatedAt: Date.now() },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=120, stale-while-revalidate=60',
        },
      },
    );
  } catch {
    return NextResponse.json(
      { supply: null, error: 'Failed to fetch on-chain data' },
      { status: 500 },
    );
  }
}
