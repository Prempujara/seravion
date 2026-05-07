import Navbar from "@/components/navbar/navbar";
import Landing from "@/components/landingpage/landing";
import Services from "@/components/services/services";
import Work from "@/components/work/work";
import Stats from "@/components/stats/stats";
import Testimonials from "@/components/testimonials/testimonials";
import CTA from "@/components/cta/cta";
import Footer from "@/components/footer/footer";
import LogoStrip from "@/components/logostrip/logostrip";
import ServiceSection from "@/components/servicesection/servicesection";
import SaasProduct from "@/components/saasproduct/saasproduct";
import Industries from "@/components/industries/industries";
export default function Home() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <Landing />
      <LogoStrip />
      <Services />
      <Work />
      <ServiceSection /> 
      {/* Properly rendered component */}
      <SaasProduct />
      <Industries/>
      <Stats />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}