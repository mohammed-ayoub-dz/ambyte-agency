import dynamic from 'next/dynamic';

const FloatingNav = dynamic(() => import('@/components/modules/floating-navbar'));
const HeroParallax = dynamic(() => import('@/components/modules/hero-parallax'));
const Services = dynamic(() => import('@/components/modules/services'));
const WebExpo = dynamic(() => import('@/components/modules/web-expo'));
const ContactSection = dynamic(() => import('@/components/modules/contact'));
const Footer = dynamic(() => import('@/components/modules/footer'));

export default function HomePage() {
  return (
    <>
      <FloatingNav />
      <HeroParallax />
      <Services />
      <WebExpo />
      <ContactSection />
      <Footer />
   </>
  );
}
