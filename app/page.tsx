import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-black">
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </main>
  );
}
