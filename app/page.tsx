import Navbar from "@/components/navbar/navbar";
import Landing from "@/components/landingpage/page";

export default function Home() {
  return (
    <main className="bg-[#0a0a0f] min-h-screen">
      <Navbar />
      <Landing />
    </main>
  );
}
