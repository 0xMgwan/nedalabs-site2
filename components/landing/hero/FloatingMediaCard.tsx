'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Coins, Zap, Code, Network, Trophy, Play, TrendingUp } from 'lucide-react';

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
    href: 'https://www.ntzs.co.tz/developers',
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
  {
    icon: TrendingUp,
    subtitle: 'Automated Market Making',
    title: 'SimpleFX — Earn While You Sleep',
    description:
      'Deposit nTZS, set your spread, and collect fees on every swap — automatically, around the clock. No trading desk. No effort.',
    cta: 'Start Earning',
    href: 'https://www.ntzs.co.tz/simplefx',
    image: '/assets/logos/simplefx.svg',
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
    <div className="relative w-full">
      <div className="relative overflow-hidden rounded-[clamp(16px,2vw,32px)] bg-np-paper ring-1 ring-black/10">
        <div className="absolute inset-x-0 top-0 h-1 bg-np-ink/5">
          <div className="h-full origin-left bg-np-blue" style={{ transform: `scaleX(${progress})` }} />
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
            className="grid min-h-[340px] gap-8 p-8 sm:p-12 md:grid-cols-[auto_1fr] md:items-center"
          >
            <motion.div custom={0} variants={stagger} initial="hidden" animate="show">
              {slide.image ? (
                <Image
                  src={slide.image}
                  alt=""
                  width={128}
                  height={128}
                  className="h-20 w-20 rounded-[20px] object-cover ring-1 ring-black/10 sm:h-28 sm:w-28 sm:rounded-[28px]"
                />
              ) : (
                <div className="flex h-20 w-20 items-center justify-center rounded-[20px] bg-np-bone sm:h-28 sm:w-28 sm:rounded-[28px]">
                  <Icon className="h-9 w-9 text-np-ink sm:h-12 sm:w-12" />
                </div>
              )}
            </motion.div>

            <div>
              <motion.p custom={1} variants={stagger} initial="hidden" animate="show" className="np-label flex items-center gap-3 text-np-label">
                <span className="text-np-blue">{String(current + 1).padStart(2, '0')}</span>
                {slide.subtitle}
              </motion.p>
              <motion.h3
                custom={2}
                variants={stagger}
                initial="hidden"
                animate="show"
                className="mt-4 text-[clamp(24px,2.4vw,38px)] font-medium leading-[1.05] tracking-[-0.03em]"
              >
                {slide.title}
              </motion.h3>
              <motion.p custom={3} variants={stagger} initial="hidden" animate="show" className="np-body mt-4 max-w-[46ch] text-np-ink/75">
                {slide.description}
              </motion.p>
              <motion.div custom={4} variants={stagger} initial="hidden" animate="show" className="mt-8 flex flex-wrap gap-3">
                <a
                  href={slide.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="np-focus group inline-flex items-center gap-2 rounded-full bg-np-blue px-6 py-3.5 font-bold text-np-ink transition-transform duration-300 hover:-translate-y-0.5"
                >
                  {slide.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="mailto:support@nedapay.xyz"
                  className="np-focus inline-flex items-center rounded-full border border-np-ink px-6 py-3.5 font-bold transition-colors hover:bg-np-ink hover:text-np-bone"
                >
                  Contact sales
                </a>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {slides.map((s, index) => (
            <button
              key={s.title}
              onClick={() => goto(index)}
              className={`np-focus h-2 rounded-full transition-all duration-300 ${index === current ? 'w-8 bg-np-ink' : 'w-2 bg-np-ink/20 hover:bg-np-ink/40'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button onClick={prev} className="np-focus rounded-full border border-np-ink/20 p-2.5 transition-colors hover:border-np-ink" aria-label="Previous slide">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button onClick={next} className="np-focus rounded-full border border-np-ink/20 p-2.5 transition-colors hover:border-np-ink" aria-label="Next slide">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
