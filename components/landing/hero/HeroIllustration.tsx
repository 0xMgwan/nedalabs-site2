'use client';

export function HeroIllustration() {
  return (
    <div className="pointer-events-none absolute right-0 top-1/2 z-[1] hidden -translate-y-1/2 lg:block">
      <svg
        width="320"
        height="460"
        viewBox="0 0 320 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-48 xl:w-64 2xl:w-80"
        aria-hidden="true"
      >
        {/* Rocket body */}
        <path
          d="M180 80 L200 40 L220 80 L220 200 L180 200 Z"
          className="stroke-primary-800 dark:stroke-white/80"
          strokeWidth="2"
          fill="none"
        />
        {/* Rocket window */}
        <circle
          cx="200"
          cy="130"
          r="15"
          className="stroke-primary-800 dark:stroke-white/80"
          strokeWidth="2"
          fill="none"
        />
        {/* Rocket fins */}
        <path
          d="M180 180 L155 220 L180 200"
          className="stroke-primary-800 dark:stroke-white/80"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M220 180 L245 220 L220 200"
          className="stroke-primary-800 dark:stroke-white/80"
          strokeWidth="2"
          fill="none"
        />

        {/* Exhaust / flame streaks - purple accent */}
        <path
          d="M190 200 Q185 260 170 320"
          className="stroke-secondary-400"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.7"
        />
        <path
          d="M200 200 Q200 270 200 340"
          className="stroke-secondary-500"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          opacity="0.6"
        />
        <path
          d="M210 200 Q215 260 230 320"
          className="stroke-secondary-400"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.7"
        />

        {/* Subtle glow behind exhaust */}
        <ellipse
          cx="200"
          cy="280"
          rx="40"
          ry="60"
          className="fill-secondary-400 dark:fill-secondary-500"
          opacity="0.1"
        />

        {/* Robotic hand */}
        <path
          d="M140 180 Q130 170 125 155 Q120 140 130 135 Q140 130 145 145 L150 165"
          className="stroke-primary-800 dark:stroke-white/80"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        {/* Fingers */}
        <path
          d="M125 155 Q115 148 110 138 Q108 128 115 127 Q122 126 125 140"
          className="stroke-primary-800 dark:stroke-white/80"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M130 145 Q118 135 115 122 Q114 112 122 113 Q130 114 130 130"
          className="stroke-primary-800 dark:stroke-white/80"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        {/* Palm/wrist */}
        <path
          d="M140 180 L155 195 Q160 200 155 205 L140 210"
          className="stroke-primary-800 dark:stroke-white/80"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />

        {/* Small decorative dots */}
        <circle cx="260" cy="100" r="2" className="fill-primary-400 dark:fill-white/40" />
        <circle cx="270" cy="150" r="1.5" className="fill-secondary-400" opacity="0.6" />
        <circle cx="250" cy="250" r="2" className="fill-primary-300 dark:fill-white/30" />
        <circle cx="280" cy="200" r="1" className="fill-secondary-300" opacity="0.5" />
      </svg>
    </div>
  );
}
