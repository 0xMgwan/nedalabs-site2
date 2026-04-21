"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { codeSnippet } from '@/data/config/heroData';

const accordionItems = [
  {
    id: 1,
    title: 'nTZS Stablecoin',
    imageUrl: '/assets/logos/ntzs.jpg',
    href: 'https://www.ntzs.co.tz/',
    isCode: false,
  },
  {
    id: 2,
    title: 'NEDApay Payments',
    imageUrl: '/assets/logos/nedapay.jpg',
    href: 'https://www.nedapay.xyz/',
    isCode: false,
  },
  {
    id: 3,
    title: 'Developer APIs',
    imageUrl: '',
    href: 'https://www.ntzs.co.tz/developers',
    isCode: true,
  },
  {
    id: 4,
    title: 'WashikaDAU',
    imageUrl: '/assets/logos/jukumu.jpg',
    href: 'https://www.washikadau.com',
    isCode: false,
  },
  {
    id: 5,
    title: 'NEDA LABS',
    imageUrl: '/assets/logos/nedalabs.jpg',
    href: 'https://www.nedapay.xyz/',
    isCode: false,
  },
];

interface AccordionItemData {
  id: number;
  title: string;
  imageUrl: string;
  href: string;
  isCode: boolean;
}

interface AccordionItemProps {
  item: AccordionItemData;
  isActive: boolean;
  onMouseEnter: () => void;
}

const AccordionItem = ({ item, isActive, onMouseEnter }: AccordionItemProps) => {
  return (
    <div
      className={`
        relative h-[450px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out flex-shrink-0
        ${isActive ? 'w-[400px]' : 'w-[60px]'}
      `}
      onMouseEnter={onMouseEnter}
    >
      {item.isCode ? (
        /* Code snippet panel */
        <>
          <div className="absolute inset-0 bg-primary-900" />
          <div className="absolute inset-0 overflow-hidden p-5 flex flex-col">
            <div className="flex items-center gap-2 mb-3 shrink-0">
              <span className="text-xs font-mono text-primary-400">&gt;_ Quick Start</span>
            </div>
            <pre className="text-[10px] leading-relaxed font-mono text-secondary-300 overflow-hidden whitespace-pre-wrap break-all flex-1">
              {codeSnippet}
            </pre>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
        </>
      ) : (
        /* Image panel */
        <>
          <div className="absolute inset-0 bg-primary-900" />
          <Image
            src={item.imageUrl}
            alt={item.title}
            fill
            className="object-contain p-6"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </>
      )}

      {/* Active panel: title + learn more */}
      {isActive ? (
        <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
          <span className="text-white text-lg font-semibold">{item.title}</span>
          <a
            href={item.href}
            target={item.href.startsWith('http') ? '_blank' : undefined}
            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-white hover:bg-white/20 transition-colors"
          >
            Learn more
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      ) : (
        /* Collapsed panel: vertical title */
        <span className="absolute text-white text-lg font-semibold whitespace-nowrap bottom-24 left-1/2 -translate-x-1/2 rotate-90 transition-all duration-300 ease-in-out">
          {item.title}
        </span>
      )}
    </div>
  );
};

export function LandingAccordionItem() {
  const [activeIndex, setActiveIndex] = useState(4);

  return (
    <div className="bg-surface-light dark:bg-canvas-dark font-sans">
      <section className="container mx-auto px-4 py-16 md:py-28">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* Left Side: Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            {/* Badge */}
            <div className="mb-5 flex items-center gap-2 justify-center md:justify-start">
              <span className="rounded-full bg-primary-800 dark:bg-white/10 border border-primary-200 dark:border-white/10 px-3 py-1 text-xs font-semibold text-white dark:text-white/80 uppercase tracking-widest">
                BOT-REGULATED
              </span>
              <a
                href="https://www.ntzs.co.tz/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-primary-200 dark:border-white/10 bg-primary-50 dark:bg-white/5 px-3 py-1 text-xs font-medium text-primary-500 dark:text-white/50 hover:text-primary-800 dark:hover:text-white/80 transition-colors"
              >
                nTZS — Tanzania&apos;s first regulated stablecoin →
              </a>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-primary-900 dark:text-white leading-tight tracking-tighter">
              Building the Future of Finance in Africa
            </h1>

            <p className="mt-6 text-lg text-primary-500 dark:text-primary-400 max-w-xl mx-auto md:mx-0">
              Secure, compliant digital financial infrastructure. Stablecoins, instant payments, and developer APIs powering the modern economy.
            </p>

            {/* Stats row */}
            <div className="mt-8 flex flex-wrap gap-6 justify-center md:justify-start text-sm">
              {[
                { value: '50K+', label: 'Active Users' },
                { value: '15+', label: 'Countries' },
                { value: '$100M+', label: 'Volume' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-2xl font-bold text-primary-900 dark:text-white">{stat.value}</span>
                  <span className="text-xs text-primary-400 dark:text-primary-500">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href="https://www.nedapay.xyz/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary-800 dark:bg-white text-white dark:text-primary-900 font-semibold px-7 py-3 rounded-full shadow-lg hover:bg-primary-700 dark:hover:bg-primary-100 transition-colors duration-300"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="mailto:support@nedapay.xyz"
                className="inline-flex items-center gap-2 border border-primary-200 dark:border-white/10 bg-surface-light dark:bg-white/5 text-primary-700 dark:text-white/70 font-medium px-7 py-3 rounded-full hover:border-primary-400 dark:hover:border-white/30 transition-colors duration-300"
              >
                Contact Sales
              </a>
            </div>
          </div>

          {/* Right Side: Image Accordion */}
          <div className="w-full md:w-1/2">
            <div className="flex flex-row items-center justify-center gap-3 overflow-x-auto p-2">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
