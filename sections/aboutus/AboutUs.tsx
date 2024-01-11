import React from "react";
import styles from "@/sections/aboutus/styles.module.scss";
import TwoItemsSection from "@/components/twoItemsSection/TwoItemsSection";
import VideoCard from "@/components/videoCard/VideoCard";
import Paragraph from "@/components/paragraph/Paragraph";
import Countries from "@/components/countries/Countries";
import FoldOut from "@/components/foldOut/FoldOut";

function AboutUs() {
  return (
    <section className={styles.aboutUs} id="aboutUs">
      <TwoItemsSection leftSideTitle="02." rightSideTitle="About us.">
        <Paragraph
          text="S.C. Ecoplast Hart S.R.L. is a company established in 2004 with extensive experience
in waste management and recovery, following a development policy based on own investments."
        />
        <Paragraph
          text="Overall, SC ECOPLAST HART SRL currently collects and recycles non-hazardous and
hazardous waste, non-metallic (cardboard, paper, plastic, rubber, glass) and metallic (ferrous
and non-ferrous) waste, having as its object of activity, the recovery of sorted recyclable
materials, the storage of non-hazardous and hazardous waste and wholesale trade of waste and
scrap."
        />
        <Paragraph
          text="Through its entire activity, our company fully campaigns, both for the change of
mentality towards the services dedicated to waste recycling, and for the application of the
European Community specific legislation and work procedures, in terms of waste management."
        />
        <Paragraph
          text="Thanks to a healthy company capitalization policy and the continuous reinvestment of
the profit in processing facilities, logistics park, qualified personnel, etc., we managed to
implement an efficient strategy for the services related to our partners, which allows us to
efficiently manage the waste they generate, and at the same time, to offer solutions for their
recovery, both where they are generated and in the warehouse, by choosing the most efficient
recycling methods and fully complying with the main objectives of the EU policy on the waste
management, during the generator-collector-recovery circuit(s)."
        />

        <Paragraph
          text="We equipped each partner
with mills to reduce the volume of waste and therefor the storage space, containers for their
collection, big bags for the selective collection of waste, etc. At the work station, we have the
logistics base (large tonnage dump trucks, small tonnage trucks, containers), necessary for the
waste compressing, as well as compressing and processing facilities for cardboard, plastic,
copper cables, aluminum, brass, DEEE waste."
        />
      </TwoItemsSection>
      <TwoItemsSection
        leftSideSmallTitle="Where we operate"
        rightSideSmallTitle="Global Reach, Local Impact: Discover ECOPLAST HART Across Romania, Hungary, and Moldova
        "
      >
        <Paragraph text="With a global presence, we are proud to announce our current locations in Romania, Hungary, and Republic of Moldova. Committed to delivering excellence across borders, we strive to meet the diverse needs of our clients in these dynamic markets." />
        <Paragraph text="As we continue to expand our footprint, we look forward to serving you with the same dedication and innovation that defines us on a global scale. Explore the world of possibilities with ECOPLAST HART - where international expertise meets local excellence." />
        <Countries />
      </TwoItemsSection>
      <TwoItemsSection
        leftSideSmallTitle="Certifications held"
        rightSideSmallTitle="The quality of our services is also found in the certifications held."
      >
        <Paragraph text="ISO (the International Organization for Standardization) is a worldwide federation of national standards bodies (ISO member bodies). The work of preparing International Standards is normally carried out through ISO technical committees. Each member body interested in a subject for which a technical committee has been established has the right to be represented on that committee. International organizations, governmental and non-governmental, in liaison with ISO, also take part in the work. ISO collaborates closely with the International Electrotechnical Commission (IEC) on all matters of electrotechnical standardization." />
        <FoldOut
          foldOutTitle="ISO 45001:2018 Occupational Health &amp; Safety Management System"
          collectText="SO 45001 is an international standard that specifies requirements for an occupational health and safety (OH&S) management system. It provides a framework for organizations to manage risks and improve OH&S performance. The standard establishes criteria for an OH&S policy, objectives, planning, implementation, operation, auditing and review."
        />
        <FoldOut
          foldOutTitle="ISO 14001:2015 Environmental Management System"
          collectText="ISO 14001 is the internationally recognized standard for environmental management systems (EMS). It provides a framework for organizations to design, implement, and continually improve their environmental performance"
        />
        <FoldOut
          foldOutTitle="ISO 9001:2015 Quality Management System"
          collectText="What is ISO 9001? ISO 9001 is a globally recognized standard for quality management. It helps organizations of all sizes and sectors to improve their performance, meet customer expectations and demonstrate their commitment to quality."
        />
      </TwoItemsSection>
      <div className={styles.aboutUsVideo}>
        <VideoCard src="/videos/ecoVideo.mp4" width="70%" />
      </div>
    </section>
  );
}

export default AboutUs;
