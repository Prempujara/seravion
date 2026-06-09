import Navbar from "@/components/navbar/navbar";
import Landing from "@/components/landingpage/landing";
import Services from "@/components/services/services";
import Work from "@/components/work/work";
<<<<<<< HEAD
=======
import Stats from "@/components/stats/stats";
>>>>>>> 825039b51157e34744ef3742dd2baeeee7a9f614
import Testimonials from "@/components/testimonials/testimonials";
import Footer from "@/components/footer/footer";
import LogoStrip from "@/components/logostrip/logostrip";
import ServiceSection from "@/components/servicesection/servicesection";
import SaasProduct from "@/components/saasproduct/saasproduct";
import Industries from "@/components/industries/industries";
<<<<<<< HEAD
import Blogs from "@/components/blogs/blogs";
import Contact from "@/components/contact/contact";
=======
>>>>>>> 825039b51157e34744ef3742dd2baeeee7a9f614
export default function Home() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <Landing />
      <LogoStrip />
      <Services />
      <Work />
      <ServiceSection /> 
<<<<<<< HEAD
      <SaasProduct />
      <Industries/>
      <Testimonials />
      <Blogs />
      <Contact />
=======
      {/* Properly rendered component */}
      <SaasProduct />
      <Industries/>
      <Stats />
      <Testimonials />
      <CTA />
>>>>>>> 825039b51157e34744ef3742dd2baeeee7a9f614
      <Footer />
    </main>
  );
}