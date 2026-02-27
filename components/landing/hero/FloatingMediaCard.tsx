'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Coins, Zap, Code, Network } from 'lucide-react';

const slides = [
  {
    icon: Coins,
    subtitle: 'BOT-Regulated',
    title: "nTZS — Tanzania's First Regulated Stablecoin",
    description:
      'Secure, compliant stablecoins regulated by the Bank of Tanzania. Bringing stability and trust to digital payments across East Africa.',
    cta: 'Explore nTZS',
    href: 'https://www.ntzs.co.tz/',
    image: '/assets/logos/ntzs.jpg',
    accent: 'from-secondary-400/20 via-secondary-500/10 to-transparent',
    accentDark: 'dark:from-secondary-400/10 dark:via-secondary-600/5 dark:to-transparent',
  },
  {
    icon: Zap,
    subtitle: 'NEDApay',
    title: 'Lightning-Fast Transactions',
    description:
      'Send and receive payments instantly across borders. Low fees, high speed, and complete transparency for businesses and individuals.',
    cta: 'Start Sending',
    href: 'https://www.nedapay.xyz/',
    image: '/assets/logos/nedapay.jpg',
    accent: 'from-blue-400/20 via-blue-500/10 to-transparent',
    accentDark: 'dark:from-blue-400/10 dark:via-blue-600/5 dark:to-transparent',
  },
  {
    icon: Code,
    subtitle: 'Developer APIs',
    title: 'Build with Powerful APIs',
    description:
      'Integrate global payout infrastructure into your application. Comprehensive documentation, SDKs, and support for developers.',
    cta: 'View Docs',
    href: 'https://nedapayplus.xyz/docs',
    accent: 'from-amber-400/20 via-amber-500/10 to-transparent',
    accentDark: 'dark:from-amber-400/10 dark:via-amber-600/5 dark:to-transparent',
  },
  {
    icon: Network,
    subtitle: 'Regenerative Finance',
    title: 'JUKUMU Network',
    description:
      'Empowering sustainable community development through ReFi. Supporting financial inclusion and eco-friendly initiatives across East Africa.',
    cta: 'Join Movement',
    href: '#jukumu',
    accent: 'from-emerald-400/20 via-emerald-500/10 to-transparent',
    accentDark: 'dark:from-emerald-400/10 dark:via-emerald-600/5 dark:to-transparent',
  },
];

const DURATION = 5000;

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
    scale: 0.96,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
    scale: 0.96,
  }),
};

const childStagger = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' as const },
  },
};

export function FloatingMediaCard() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAuto, setIsAuto] = useState(true);
  const [progress, setProgress] = useState(0);

  const goto = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current],
  );

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
    setIsAuto(false);
    setProgress(0);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAuto(false);
    setProgress(0);
  }, []);

  // Auto-play timer
  useEffect(() => {
    if (!isAuto) return;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const pct = Math.min(elapsed / DURATION, 1);
      setProgress(pct);
      if (pct >= 1) {
        setDirection(1);
        setCurrent((prev) => (prev + 1) % slides.length);
        setProgress(0);
      } else {
        frame = requestAnimationFrame(tick);
      }
    };
    let frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isAuto, current]);

  const slide = slides[current];
  const Icon = slide.icon;

  return (
    <div className="relative z-[3] mx-auto w-full max-w-4xl px-6 lg:px-10">
      {/* Glow behind card */}
      <motion.div
        key={`glow-${current}`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 0.8 }}
        className={`pointer-events-none absolute -inset-8 rounded-[40px] bg-gradient-to-br blur-3xl ${slide.accent} ${slide.accentDark}`}
        aria-hidden="true"
      />

      <div className="relative overflow-hidden rounded-card-lg border border-white/40 bg-white/60 shadow-floating-media backdrop-blur-xl dark:border-white/[0.08] dark:bg-white/[0.04] dark:shadow-floating-media-dark">

        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col items-center px-6 py-6 text-center sm:px-8 sm:py-8 lg:px-10"
          >
            {/* Logo / Icon with entrance animation */}
            <motion.div
              variants={childStagger}
              initial="hidden"
              animate="show"
              className="mb-4"
            >
              {slide.image ? (
                <div className="relative">
                  <div className="absolute -inset-2 animate-pulse rounded-2xl bg-secondary-400/20 blur-lg dark:bg-secondary-400/10" />
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={80}
                    height={80}
                    className="relative h-16 w-16 rounded-2xl object-cover shadow-menu sm:h-20 sm:w-20"
                  />
                </div>
              ) : (
                <div className="relative">
                  <div className="absolute -inset-2 animate-pulse rounded-2xl bg-secondary-400/20 blur-lg dark:bg-secondary-400/10" />
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-800 shadow-menu sm:h-20 sm:w-20 dark:bg-white">
                    <Icon className="h-8 w-8 text-white dark:text-primary-800" />
                  </div>
                </div>
              )}
            </motion.div>

            {/* Subtitle pill */}
            <motion.span
              variants={childStagger}
              initial="hidden"
              animate="show"
              className="mb-3 inline-block rounded-pill border border-primary-800/20 bg-primary-800/[0.06] px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-primary-700 dark:border-white/10 dark:bg-white/[0.06] dark:text-white/80"
            >
              {slide.subtitle}
            </motion.span>

            {/* Title */}
            <motion.h3
              variants={childStagger}
              initial="hidden"
              animate="show"
              className="mb-2 font-display text-2xl font-bold tracking-tight text-primary-900 sm:text-3xl lg:text-4xl dark:text-white"
            >
              {slide.title}
            </motion.h3>

            {/* Description */}
            <motion.p
              variants={childStagger}
              initial="hidden"
              animate="show"
              className="mb-5 max-w-lg text-sm leading-relaxed text-primary-500 sm:text-base dark:text-white/60"
            >
              {slide.description}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={childStagger}
              initial="hidden"
              animate="show"
              className="flex flex-col items-center gap-3 sm:flex-row"
            >
              <a
                href={slide.href}
                target={slide.href.startsWith('http') ? '_blank' : undefined}
                rel={slide.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group inline-flex items-center gap-2 rounded-pill bg-primary-800 px-6 py-3 text-sm font-medium text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-button-hover active:translate-y-0 dark:bg-white dark:text-primary-800"
              >
                {slide.cta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="mailto:support@nedapay.xyz"
                className="inline-flex items-center gap-2 rounded-pill border border-primary-200/80 bg-white/60 px-6 py-3 text-sm font-medium text-primary-700 backdrop-blur-sm transition-all hover:bg-white hover:shadow-nav dark:border-white/10 dark:bg-white/[0.06] dark:text-white/80 dark:hover:bg-white/10"
              >
                Contact Sales
              </a>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/60 bg-white/70 p-2.5 text-primary-600 shadow-lg backdrop-blur-md transition-all hover:scale-110 hover:bg-white hover:shadow-nav dark:border-white/10 dark:bg-white/10 dark:text-white/80 dark:hover:bg-white/20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/60 bg-white/70 p-2.5 text-primary-600 shadow-lg backdrop-blur-md transition-all hover:scale-110 hover:bg-white hover:shadow-nav dark:border-white/10 dark:bg-white/10 dark:text-white/80 dark:hover:bg-white/20"
          aria-label="Next slide"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Progress indicators */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              goto(index);
              setIsAuto(false);
              setProgress(0);
            }}
            className="group relative h-1.5 overflow-hidden rounded-full transition-all"
            style={{ width: index === current ? 40 : 12 }}
            aria-label={`Go to slide ${index + 1}`}
          >
            {/* Track */}
            <span
              className={`absolute inset-0 rounded-full transition-colors ${
                index === current
                  ? 'bg-primary-300/40 dark:bg-white/20'
                  : 'bg-primary-300/30 group-hover:bg-primary-400/40 dark:bg-white/15 dark:group-hover:bg-white/30'
              }`}
            />
            {/* Fill */}
            {index === current && (
              <motion.span
                className="absolute inset-y-0 left-0 rounded-full bg-primary-800 dark:bg-white"
                style={{ width: `${progress * 100}%` }}
              />
            )}
            {index < current && (
              <span className="absolute inset-0 rounded-full bg-primary-800/60 dark:bg-white/50" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
