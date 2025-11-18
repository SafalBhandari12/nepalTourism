import Hero from "@/components/Hero";
import About from "@/components/About";
import ScenicShowcase from "@/components/ScenicShowcase";
import SignatureJourneys from "@/components/SignatureJourneys";
import SignatureJourneysMobile from "@/components/SignatureJourneysMobile";
import MoreAbout from "@/components/MoreAbout";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <SignatureJourneys />
      <SignatureJourneysMobile />
      <ScenicShowcase />

      <MoreAbout />
      <Footer />
    </>
  );
}
