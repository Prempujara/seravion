import Navbar from "@/components/navbar/navbar";
import Landing from "@/components/landingpage/landing";
import Services from "@/components/services/services";
import Work from "@/components/work/work";
import Testimonials from "@/components/testimonials/testimonials";
import Footer from "@/components/footer/footer";
import LogoStrip from "@/components/logostrip/logostrip";
import ServiceSection from "@/components/servicesection/servicesection";
import SaasProduct from "@/components/saasproduct/saasproduct";
import Industries from "@/components/industries/industries";
import Blogs from "@/components/blogs/blogs";
import Contact from "@/components/contact/contact";

export default function Home() {
  return (
      <Landing />
      <LogoStrip />
      <Services />
      <Work />
      <ServiceSection /> 
      <SaasProduct />
      <Industries/>
      <Testimonials />
      <Blogs />
      <Contact />
      <Footer />
    </main>
  );
}