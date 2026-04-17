"use client";

import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import { heroContent } from "@/data/config/heroData";

export function GeminiHeroSection() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  const badge = (
    <>
      <span className="rounded-full bg-white/[0.12] border border-white/20 px-3 py-1 text-xs font-semibold text-white/90 uppercase tracking-widest">
        {heroContent.badge}
      </span>
      <a
        href={heroContent.pillLink.href}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/60 hover:text-white/90 transition-colors"
      >
        {heroContent.pillLink.label}
      </a>
    </>
  );

  const cta = (
    <>
      <a
        href="https://www.nedapay.xyz/"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-white/90 transition-all"
      >
        Get Started
      </a>
      <a
        href="mailto:support@nedapay.xyz"
        className="rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/80 hover:border-white/40 hover:text-white transition-all"
      >
        Contact Sales
      </a>
    </>
  );

  return (
    <div
      className="h-[400vh] bg-black w-full relative pt-40 overflow-clip"
      ref={ref}
    >
      <GoogleGeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
        title={heroContent.headline}
        description={heroContent.subhead}
        badge={badge}
        cta={cta}
      />
    </div>
  );
}
