import {
  NavBar,
  ProductsSection,
  FeaturesSection,
  DevelopersSection,
  CtaSection,
  SiteFooter,
} from '@/components/landing/hero';
import { HeroAsciiOne } from '@/components/ui/hero-ascii-one';

export default function Page() {
  return (
    <div className="bg-white dark:bg-black font-mono overflow-x-hidden w-full">
      <NavBar />
      <HeroAsciiOne />

      <ProductsSection />
      <FeaturesSection />
      <DevelopersSection />
      <CtaSection />
      <SiteFooter />
    </div>
  );
}
