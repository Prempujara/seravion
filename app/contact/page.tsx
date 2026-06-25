import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import Contact from "@/components/contact/contact";


import ContactHero from "@/components/contact/components/ContactHero";
import ContactCards from "@/components/contact/components/ContactCards";
import ContactForm from "@/components/contact/components/ContactForm";
export default function ContactPage() {
 return (
    <>
      <Navbar />

      <main className="bg-white">
        <ContactHero />
        <ContactCards />
        <ContactForm/>
      </main>
      <Contact />
      <Footer />
    </>
  );
}