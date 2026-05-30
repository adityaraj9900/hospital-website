import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import About from "@/components/About";
import Doctors from "@/components/Doctors";
import Testimonials from "@/components/Testimonials";
import Appointment from "@/components/Appointment";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <About />
      <Doctors />
      <Testimonials />
      <Appointment />
      <Contact />
      <Footer />
    </main>
  );
}
