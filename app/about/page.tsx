import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import Contact from "@/components/contact/contact";

import AboutHero from "@/components/about/AboutHero";
import AboutContent from "@/components/about/AboutContent";
import AboutGallery from "@/components/about/AboutGallery";
import AboutProcess from "@/components/about/AboutProcess";
import AboutStats from "@/components/about/AboutStats";
import AboutClients from "@/components/about/AboutClients";
import TeamSection from "@/components/about/TeamSection";
export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">
        <AboutHero />
        <AboutContent />
        <AboutGallery />
        <AboutProcess />
        <AboutStats />
        <AboutClients />
        <TeamSection />
      </main>
      <Contact />
      <Footer />
    </>
  );
}