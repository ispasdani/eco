import TextOnScroll from "@/components/textOnScroll/TextOnScroll";
import LandingSection from "@/sections/landingSection/LandingSection";
import StorySection from "@/sections/story/StorySection";
import WhyUsSection from "@/sections/whyUsSection/WhyUsSection";

export default function Home() {
  return (
    <div className="main">
      <LandingSection />
      <TextOnScroll />
      <WhyUsSection />
      <StorySection />
    </div>
  );
}
