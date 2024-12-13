import ContactUS from "@/components/ContactUS";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main
      className="min-h-screen bg-[#FAF9F6] flex flex-col items-center"
    >
      <HeroSection />
      <Services />
      <Projects />
      <ContactUS />
    </main>
  );
}
