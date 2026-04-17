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
  },
  {
    icon: Code,
    subtitle: 'Developer APIs',
    title: 'Build with Powerful APIs',
    description:
      'Integrate global payout infrastructure into your application. Comprehensive documentation, SDKs, and support for developers.',
    cta: 'View Docs',
    href: 'https://nedapayplus.xyz/docs',
    image: null,
  },
  {
    icon: Network,
    image: '/assets/logos/jukumu.jpg',
    subtitle: 'Regenerative Finance',
    title: 'WashikaDAU',
    description:
      'Empowering sustainable community development through ReFi. Supporting financial inclusion and eco-friendly initiatives across East Africa.',
    cta: 'Join Movement',
    href: 'https://www.washikadau.com',
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
      <motion.div
        key={`glow-${current}`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="pointer-events-none absolute -inset-8 bg-black/5 dark:bg-white/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative overflow-hidden border border-black/20 dark:border-white/20 bg-white dark:bg-black">
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-black/40 dark:border-white/40 z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-black/40 dark:border-white/40 z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-black/40 dark:border-white/40 z-10 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-black/40 dark:border-white/40 z-10 pointer-events-none" />

        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col items-center px-6 py-8 text-center sm:px-8 sm:py-10 lg:px-10"
          >
            {/* Logo / Icon */}
            <motion.div
              variants={childStagger}
              initial="hidden"
              animate="show"
              className="mb-5"
            >
              {slide.image ? (
                <div className="border border-black/20 dark:border-white/20 bg-white dark:bg-black p-2 inline-block">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={64}
                    height={64}
                    className="h-14 w-14 object-cover sm:h-16 sm:w-16"
                  />
                </div>
              ) : (
                <div className="border border-black/20 dark:border-white/20 bg-white dark:bg-black flex h-14 w-14 items-center justify-center sm:h-16 sm:w-16">
                  <Icon className="h-7 w-7 text-black/60 dark:text-white/60" />
                </div>
              )}
            </motion.div>

            {/* Subtitle pill */}
            <motion.span
              variants={childStagger}
              initial="hidden"
              animate="show"
              className="mb-3 inline-block border border-black/20 dark:border-white/20 px-3 py-1 text-[9px] font-mono uppercase tracking-widest text-black/50 dark:text-white/50"
            >
              {slide.subtitle}
            </motion.span>

            {/* Title */}
            <motion.h3
              variants={childStagger}
              initial="hidden"
              animate="show"
              className="mb-3 font-mono font-bold text-black dark:text-white text-2xl sm:text-3xl tracking-tight"
            >
              {slide.title}
            </motion.h3>

            {/* Description */}
            <motion.p
              variants={childStagger}
              initial="hidden"
              animate="show"
              className="mb-6 max-w-lg font-mono text-sm text-black/60 dark:text-white/60 leading-relaxed"
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
                className="group inline-flex items-center gap-2 border border-black dark:border-white font-mono text-xs uppercase tracking-widest px-6 py-3 text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200"
              >
                {slide.cta}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="mailto:support@nedapay.xyz"
                className="inline-flex items-center gap-2 border border-black/20 dark:border-white/20 font-mono text-xs uppercase tracking-widest px-6 py-3 text-black/60 dark:text-white/60 hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white transition-all duration-200"
              >
                Contact Sales
              </a>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 border border-black/20 dark:border-white/20 bg-white dark:bg-black p-2 text-black/60 dark:text-white/60 hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 border border-black/20 dark:border-white/20 bg-white dark:bg-black p-2 text-black/60 dark:text-white/60 hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white transition-all"
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
            className="group relative h-1.5 overflow-hidden transition-all"
            style={{ width: index === current ? 40 : 12 }}
            aria-label={`Go to slide ${index + 1}`}
          >
            {/* Track */}
            <span
              className={`absolute inset-0 transition-colors ${
                index === current
                  ? 'bg-black/20 dark:bg-white/20'
                  : 'bg-black/10 dark:bg-white/10 group-hover:bg-black/20 dark:group-hover:bg-white/20'
              }`}
            />
            {/* Fill */}
            {index === current && (
              <motion.span
                className="absolute inset-y-0 left-0 bg-black dark:bg-white"
                style={{ width: `${progress * 100}%` }}
              />
            )}
            {index < current && (
              <span className="absolute inset-0 bg-black/50 dark:bg-white/50" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
