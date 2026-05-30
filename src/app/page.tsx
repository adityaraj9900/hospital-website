import Navbar      from "@/components/Navbar";
import Hero        from "@/components/Hero";
import Marquee     from "@/components/Marquee";
import Features    from "@/components/Features";
import Stats       from "@/components/Stats";
import Doctors     from "@/components/Doctors";
import Testimonials from "@/components/Testimonials";
import FAQ         from "@/components/FAQ";
import CTABanner   from "@/components/CTABanner";
import Footer      from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <Features />
      <Stats />
      <Doctors />
      <Testimonials />
      <FAQ />
      <CTABanner />
      <Footer />
    </main>
  );
}
