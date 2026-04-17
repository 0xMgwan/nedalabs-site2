import {
  NavBar,
  ProductsSection,
  FeaturesSection,
  JukumuSection,
  DevelopersSection,
  CtaSection,
  SiteFooter,
} from '@/components/landing/hero';
import { HeroAsciiOne } from '@/components/ui/hero-ascii-one';

export default function Page() {
  return (
    <div className="bg-white dark:bg-black font-mono">
      <NavBar />
      <HeroAsciiOne />

      <ProductsSection />
      <FeaturesSection />
      <JukumuSection />
      <DevelopersSection />
      <CtaSection />
      <SiteFooter />
    </div>
  );
}
