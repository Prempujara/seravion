import Navbar from "@/components/navbar/navbar";
import Hero from "@/components/hero/hero";
import Stats from "@/components/stats/stats";
import Services from "@/components/services/services";
import Work from "@/components/work/work";
import Testimonials from "@/components/testimonials/testimonials";
import CTA from "@/components/cta/cta";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Work />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}