import Head from 'next/head';
import ContactUS from "@/components/ContactUS";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <meta 
          name="viewport" 
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <main className="min-h-screen bg-[#FAF9F6] flex flex-col items-center">
        <HeroSection />
        <Services />
        <Projects />
        <Testimonials />
        <ContactUS />
        <Footer />
      </main>
    </>
  );
}