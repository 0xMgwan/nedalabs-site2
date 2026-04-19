'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Coins, Zap, Code, Network, Trophy, Play } from 'lucide-react';

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
    subtitle: 'Regenerative Finance',
    title: 'WashikaDAU',
    description:
      'Empowering sustainable community development through ReFi. Supporting financial inclusion and eco-friendly initiatives across East Africa.',
    cta: 'Join Movement',
    href: 'https://www.washikadau.com',
    image: '/assets/logos/jukumu.jpg',
  },
  {
    icon: Trophy,
    subtitle: "Africa's Biggest Predictions Market",
    title: 'GUAP — Predict. Win. Earn.',
    description:
      "Africa's #1 predictions market. Bet on real-world outcomes, compete on leaderboards, and earn with digital assets.",
    cta: 'Start Predicting',
    href: 'https://www.guap.gold',
    image: '/assets/logos/guap.png',
  },
  {
    icon: Play,
    subtitle: 'Creator Monetization',
    title: 'PayPerPlay',
    description:
      'The platform where creators earn from every play, stream, and download. Instant payouts, powerful analytics, full control.',
    cta: 'Start Earning',
    href: 'https://www.payperplay.xyz',
    image: '/assets/logos/payperplay.png',
  },
];

const DURATION = 4000;
const RESUME_DELAY = 3000;

const slideVariants = {
  enter: (dir: number) => ({
    y: dir > 0 ? 40 : -40,
    opacity: 0,
    filter: 'blur(4px)',
  }),
  center: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
  },
  exit: (dir: number) => ({
    y: dir > 0 ? -40 : 40,
    opacity: 0,
    filter: 'blur(4px)',
  }),
};

const stagger = {
  hidden: { opacity: 0, y: 12 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: 'easeOut' as const, delay: i * 0.07 },
  }),
};

export function FloatingMediaCard() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resumeAuto = useCallback(() => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setPaused(false), RESUME_DELAY);
  }, []);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
    setProgress(0);
    setPaused(true);
    resumeAuto();
  }, [resumeAuto]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
    setPaused(true);
    resumeAuto();
  }, [resumeAuto]);

  const goto = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
      setProgress(0);
      setPaused(true);
      resumeAuto();
    },
    [current, resumeAuto],
  );

  // Auto-scroll loop
  useEffect(() => {
    if (paused) return;
    const start = Date.now();
    let frame: number;
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
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
    };
  }, [paused, current]);

  // Cleanup resume timer on unmount
  useEffect(() => {
    return () => {
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
  }, []);

  const slide = slides[current];
  const Icon = slide.icon;

  return (
    <div className="relative z-[3] w-full">
      {/* Animated scan line */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-black/20 dark:via-white/20 to-transparent z-20"
        animate={{ top: ['0%', '100%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        aria-hidden="true"
      />

      <div className="relative overflow-hidden border border-black/20 dark:border-white/20 bg-white dark:bg-black">
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-black/60 dark:border-white/60 z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-black/60 dark:border-white/60 z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-black/60 dark:border-white/60 z-10 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-black/60 dark:border-white/60 z-10 pointer-events-none" />

        {/* Top progress bar */}
        <div className="absolute top-0 left-0 right-0 h-px bg-black/10 dark:bg-white/10 z-10">
          <motion.div
            className="h-full bg-black dark:bg-white origin-left"
            style={{ scaleX: progress }}
            transition={{ duration: 0 }}
          />
        </div>

        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center px-10 py-8 text-center sm:px-12 sm:py-10"
          >
            {/* Slide index */}
            <motion.div
              custom={0}
              variants={stagger}
              initial="hidden"
              animate="show"
              className="mb-4 self-stretch flex items-center gap-2"
            >
              <span className="text-[9px] font-mono text-black/30 dark:text-white/30 tracking-widest">
                {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
              </span>
              <div className="flex-1 h-px bg-black/10 dark:bg-white/10" />
              <span className="text-[9px] font-mono text-black/30 dark:text-white/30 uppercase tracking-widest">
                {paused ? 'PAUSED' : 'LIVE'}
              </span>
              {!paused && (
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-black/60 dark:bg-white/60"
                  animate={{ opacity: [1, 0.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              )}
            </motion.div>

            {/* Logo / Icon */}
            <motion.div custom={1} variants={stagger} initial="hidden" animate="show" className="mb-5">
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

            {/* Subtitle */}
            <motion.span
              custom={2}
              variants={stagger}
              initial="hidden"
              animate="show"
              className="mb-3 inline-block border border-black/20 dark:border-white/20 px-3 py-1 text-[9px] font-mono uppercase tracking-widest text-black/50 dark:text-white/50"
            >
              {slide.subtitle}
            </motion.span>

            {/* Title */}
            <motion.h3
              custom={3}
              variants={stagger}
              initial="hidden"
              animate="show"
              className="mb-3 font-mono font-bold text-black dark:text-white text-lg sm:text-2xl tracking-tight"
            >
              {slide.title}
            </motion.h3>

            {/* Description */}
            <motion.p
              custom={4}
              variants={stagger}
              initial="hidden"
              animate="show"
              className="mb-6 max-w-sm font-mono text-xs sm:text-sm text-black/60 dark:text-white/60 leading-relaxed"
            >
              {slide.description}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              custom={5}
              variants={stagger}
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
          className="absolute left-3 top-1/2 -translate-y-1/2 border border-black/20 dark:border-white/20 bg-white dark:bg-black p-2 text-black/60 dark:text-white/60 hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 border border-black/20 dark:border-white/20 bg-white dark:bg-black p-2 text-black/60 dark:text-white/60 hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="mt-4 flex items-center justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goto(index)}
            className="group relative h-1 overflow-hidden transition-all duration-300"
            style={{ width: index === current ? 32 : 10 }}
            aria-label={`Go to slide ${index + 1}`}
          >
            <span
              className={`absolute inset-0 ${
                index === current
                  ? 'bg-black/30 dark:bg-white/30'
                  : 'bg-black/10 dark:bg-white/10 group-hover:bg-black/20 dark:group-hover:bg-white/20'
              }`}
            />
            {index === current && (
              <motion.span
                className="absolute inset-y-0 left-0 bg-black dark:bg-white"
                style={{ width: `${progress * 100}%` }}
              />
            )}
            {index < current && <span className="absolute inset-0 bg-black/50 dark:bg-white/50" />}
          </button>
        ))}
      </div>
    </div>
  );
}
