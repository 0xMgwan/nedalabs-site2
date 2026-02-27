import {
  AuroraBackground,
  HeroIllustration,
  NavBar,
  HeroSection,
  FloatingMediaCard,
  ProductsSection,
  FeaturesSection,
  JukumuSection,
  DevelopersSection,
  CtaSection,
  SiteFooter,
} from '@/components/landing/hero';

export default function Page() {
  return (
    <>
      {/* Hero area with aurora blobs + illustration */}
      <div className="relative w-full overflow-x-hidden">
        <AuroraBackground />
        <HeroIllustration />
        <NavBar />
        <HeroSection />

        <div className="mt-16 pb-24 lg:mt-20">
          <FloatingMediaCard />
        </div>
      </div>

      {/* Products */}
      <ProductsSection />

      {/* Features / Why Choose Us */}
      <FeaturesSection />

      {/* JUKUMU Network */}
      <JukumuSection />

      {/* Developers */}
      <DevelopersSection />

      {/* CTA */}
      <CtaSection />

      {/* Footer */}
      <SiteFooter />
    </>
  );
}
