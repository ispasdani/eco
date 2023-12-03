import TextOnScroll from "@/components/textOnScroll/TextOnScroll";
import LandingSection from "@/sections/landingSection/LandingSection";
import WhyUsSection from "@/sections/whyUsSection/WhyUsSection";

export default function Home() {
  return (
    <div className="main">
      <LandingSection />
      <TextOnScroll />
      <WhyUsSection />
    </div>
  );
}
