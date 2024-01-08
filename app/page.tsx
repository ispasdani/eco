import Banner from "@/components/banner/Banner";
import TextOnScroll from "@/components/textOnScroll/TextOnScroll";
import AboutUs from "@/sections/aboutus/AboutUs";
import LandingSection from "@/sections/landingSection/LandingSection";
import WhatWeDo from "@/sections/whatWeDo/WhatWeDo";
import WhyUsSection from "@/sections/whyUsSection/WhyUsSection";

export default function Home() {
  return (
    <div className="main">
      <LandingSection />
      <TextOnScroll />
      <WhyUsSection />
      <Banner />
      <AboutUs />
      <WhatWeDo />
    </div>
  );
}
