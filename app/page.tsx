import {
  NavBar,
  ProductsSection,
  TokenizationSection,
  FeaturesSection,
  SimpleFXSection,
  DevelopersSection,
  CtaSection,
  SiteFooter,
} from '@/components/landing/hero';
import { HeroAsciiOne } from '@/components/ui/hero-ascii-one';

export default function Page() {
  return (
    <div className="np w-full overflow-x-hidden">
      <NavBar />
      <HeroAsciiOne />

      <ProductsSection />
      <TokenizationSection />
      <FeaturesSection />
      <SimpleFXSection />
      <DevelopersSection />
      <CtaSection />
      <SiteFooter />
    </div>
  );
}
