import {
  NavBar,
  ProductsSection,
  FeaturesSection,
  JukumuSection,
  DevelopersSection,
  CtaSection,
  SiteFooter,
} from '@/components/landing/hero';
import { LandingAccordionItem } from '@/components/ui/interactive-image-accordion';

export default function Page() {
  return (
    <div className="bg-surface-light dark:bg-canvas-dark">
      {/* Sticky nav */}
      <NavBar />

      {/* Hero: Interactive Image Accordion */}
      <LandingAccordionItem />

      {/* Products */}
      <ProductsSection />

      {/* Features / Why Choose Us */}
      <FeaturesSection />

      {/* WashikaDAU */}
      <JukumuSection />

      {/* Developers */}
      <DevelopersSection />

      {/* CTA */}
      <CtaSection />

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}
