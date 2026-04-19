export const navLinks = [
  { label: 'Products', hasChevron: true, href: '#products' },
  { label: 'Solutions', hasChevron: false, href: '#features' },
  { label: 'Developers', hasChevron: false, href: '#developers' },
];

export const heroContent = {
  badge: 'BOT-REGULATED',
  pillLink: {
    label: "nTZS — Tanzania's first regulated stablecoin →",
    href: 'https://www.ntzs.co.tz/',
  },
  headline: 'Building the Future of Finance in Africa',
  subhead:
    'Secure, compliant digital financial infrastructure. Stablecoins, instant payments, and developer APIs powering the modern economy.',
};

export const megaMenuLeft = [
  {
    title: 'BOT-Regulated Stablecoins',
    subtitle: 'Bank of Tanzania regulated digital currency for East Africa',
    iconColor: 'blue' as const,
    href: 'https://www.ntzs.co.tz/',
  },
  {
    title: 'Instant Payments (NEDApay)',
    subtitle: 'Lightning-fast payment infrastructure across borders',
    iconColor: 'orange' as const,
    href: 'https://www.nedapay.xyz/',
  },
  {
    title: 'Developer APIs',
    subtitle: 'Comprehensive API suite for global payouts',
    iconColor: 'yellow' as const,
    href: 'https://nedapayplus.xyz/docs',
  },
  {
    title: 'WashikaDAU Network',
    subtitle: 'Regenerative finance for sustainable community impact',
    iconColor: 'green' as const,
    href: 'https://www.washikadau.com',
  },
  {
    title: 'GUAP — Predictions Market',
    subtitle: "Africa's biggest predictions market platform",
    iconColor: 'yellow' as const,
    href: 'https://www.guap.gold',
  },
  {
    title: 'PayPerPlay',
    subtitle: 'Creators monetizing their content with ease',
    iconColor: 'orange' as const,
    href: 'https://www.payperplay.xyz',
  },
];

export const megaMenuRight = [
  {
    title: 'Mobile Money Integration',
    subtitle: 'Connect with M-Pesa, Tigo Pesa, and more',
  },
  {
    title: 'Multi-Currency Support',
    subtitle: 'TZS, KES, UGX, and global currencies',
  },
  {
    title: 'Real-Time Analytics',
    subtitle: 'Monitor transactions with comprehensive dashboards',
  },
  {
    title: 'Compliance & Security',
    subtitle: 'Full regulatory compliance and bank-grade encryption',
  },
  {
    title: 'Webhook & Event Streams',
    subtitle: 'Real-time event notifications for your apps',
  },
];

export const megaMenuPromo = {
  title: 'View Documentation',
  subtitle: 'Explore our API docs and get started!',
};

export const products = [
  {
    title: 'BOT-Regulated Stablecoins',
    description: 'Bank of Tanzania regulated digital currency providing stability and trust for East African markets.',
    features: ['Full regulatory compliance', '1:1 TZS backing', 'Instant settlements', 'Transparent reserves'],
    href: 'https://www.ntzs.co.tz/',
    logo: '/assets/logos/ntzs.jpg',
  },
  {
    title: 'Instant Payments',
    description: 'Lightning-fast payment infrastructure for businesses and individuals across borders.',
    features: ['Real-time processing', 'Multi-currency support', 'Low transaction fees', '99.99% uptime'],
    href: 'https://www.nedapay.xyz/',
    logo: '/assets/logos/nedapay.jpg',
  },
  {
    title: 'Developer APIs',
    description: 'Comprehensive API suite for global payouts and financial integrations.',
    features: ['RESTful & GraphQL APIs', 'Comprehensive documentation', 'Sandbox environment', 'Webhook support'],
    href: 'https://nedapayplus.xyz/docs',
    logo: null,
  },
  {
    title: 'WashikaDAU Network',
    description: 'Regenerative finance platform supporting sustainable community impact and financial inclusion.',
    features: ['Community impact focus', 'Eco-friendly initiatives', 'Financial inclusion', 'Transparent impact tracking'],
    href: 'https://www.washikadau.com',
    logo: '/assets/logos/jukumu.jpg',
  },
  {
    title: 'GUAP',
    description: "Africa's biggest predictions market — bet on real-world outcomes with digital assets.",
    features: ["Africa's #1 predictions market", 'Real-world event outcomes', 'Crypto-powered wagering', 'Live leaderboards'],
    href: 'https://www.guap.gold',
    logo: '/assets/logos/guap.png',
  },
  {
    title: 'PayPerPlay',
    description: 'The creator monetization platform — earn from every play, stream, and download.',
    features: ['Content monetization', 'Pay-per-stream model', 'Creator analytics', 'Instant payouts'],
    href: 'https://www.payperplay.xyz',
    logo: '/assets/logos/payperplay.png',
  },
];

export const stats = [
  { value: '1K+', label: 'Active Users' },
  { value: '15+', label: 'Countries' },
  { value: '$1M+', label: 'Transaction Volume' },
  { value: '100%', label: 'Secure & Compliant' },
];

export const features = [
  { title: 'Bank-Grade Security', description: 'Enterprise-level encryption and compliance with international security standards.' },
  { title: 'Lightning Fast', description: 'Process transactions in milliseconds with our optimized infrastructure.' },
  { title: 'Global Reach', description: 'Connect with partners and customers across 15+ countries seamlessly.' },
  { title: 'Real-Time Analytics', description: 'Monitor transactions and performance with comprehensive dashboards.' },
  { title: 'Regulatory Compliance', description: 'Full compliance with local and international financial regulations.' },
  { title: '24/7 Support', description: 'Expert support team available round the clock to assist you.' },
];

export const washikadauStats = [
  { value: '$5M+', label: 'Impact Funding' },
  { value: '200+', label: 'Communities Served' },
  { value: '50+', label: 'Green Projects' },
  { value: '100%', label: 'Transparent' },
];

export const developerFeatures = [
  'RESTful & GraphQL APIs',
  'Comprehensive documentation',
  'Sandbox environment for testing',
  'Webhook support for real-time events',
];

export const codeSnippet = `// Initialize Neda Labs SDK
import { NedaLabs } from '@nedalabs/sdk';

const neda = new NedaLabs({
  apiKey: process.env.NEDA_API_KEY
});

// Create a payout
const payout = await neda.payouts.create({
  amount: 50000,
  currency: 'TZS',
  type: 'mobile_money',
  phone: '+255712345678'
});

console.log(payout.status);
// => "processing"`;

