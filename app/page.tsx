import Navbar from "@/components/navbar/navbar";
import Landing from "@/components/landingpage/page";

export default function Home() {
  return (
  <main className="bg-white min-h-screen flex flex-col pt-20">
  <Navbar />
  <Landing />
</main>
  );
}