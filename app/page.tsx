import Navbar from "@/components/navbar/navbar";
import Landing from "@/components/landingpage/landing";
import Services from "@/components/services/services";
import Stats from "@/components/stats/stats";

import Testimonials from "@/components/testimonials/testimonials";
import CTA from "@/components/cta/cta";
import Footer from "@/components/footer/footer";
export default function Home() {
 return (
   <main className="bg-white min-h-screen flex flex-col">
     <Navbar />
     <Landing />
     <Services />
     <Stats />
     <Testimonials />
     <CTA />
     <Footer />
   </main>
 );
}

