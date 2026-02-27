'use client';

export function AuroraBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* Primary blob: orange → peach → lavender, left-heavy */}
      <div
        className="absolute -left-1/4 -top-1/4 h-[80vh] w-[80vh] rounded-full bg-aurora-orangeSoft opacity-30 blur-[120px] dark:opacity-15"
        aria-hidden="true"
      />
      <div
        className="absolute left-[5%] top-[10%] h-[60vh] w-[60vh] rounded-full bg-aurora-peach opacity-25 blur-[100px] dark:opacity-10"
        aria-hidden="true"
      />
      <div
        className="absolute left-[15%] top-[20%] h-[50vh] w-[50vh] rounded-full bg-aurora-lavenderFog opacity-30 blur-[90px] dark:opacity-10"
        aria-hidden="true"
      />

      {/* Secondary blob: violet/lavender glow, lower-left to center */}
      <div
        className="absolute -bottom-1/4 left-[10%] h-[60vh] w-[70vh] rounded-full bg-aurora-violetMid opacity-20 blur-[110px] dark:opacity-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[10%] left-[30%] h-[40vh] w-[40vh] rounded-full bg-secondary-300 opacity-15 blur-[80px] dark:opacity-[0.08]"
        aria-hidden="true"
      />
    </div>
  );
}
