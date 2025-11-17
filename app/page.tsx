import Hero from "@/components/Hero";
import About from "@/components/About";
import ScenicShowcase from "@/components/ScenicShowcase";
import SignatureJourneys from "@/components/SignatureJourneys";
import MoreAbout from "@/components/MoreAbout";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ScenicShowcase />
      <SignatureJourneys />
      <MoreAbout />
      <Footer />
    </>
  );
}
