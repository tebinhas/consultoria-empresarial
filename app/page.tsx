import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import Problems from "@/components/Problems";
import Process from "@/components/Process";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Pillars />
      <Problems />
      <Process />
    </main>
  );
}