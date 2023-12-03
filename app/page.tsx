import TextOnScroll from "@/components/textOnScroll/TextOnScroll";
import LandingSection from "@/sections/landingSection/LandingSection";
import WhyUsSection from "@/sections/whyUsSection/WhyUsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="main">
      <LandingSection />
      <TextOnScroll />
      <WhyUsSection />
    </div>
  );
}
