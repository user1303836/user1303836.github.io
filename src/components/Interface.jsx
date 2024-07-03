import React, { useEffect, useRef, useState } from "react";
import anime from "animejs";
import ProjectMenu from "./ProjectMenu";
import GenericSection from "./GenericSection";

const Section = (props) => {
  const { children } = props;
  return (
    <section
      className={`
        hover:backdrop-hue-rotate-30
        w-20 p-0 flex flex-col items-start justify-center
        transition-[backdrop-filter] duration-1000 ease-in-out
        relative
    `}
    >
      {children}
    </section>
  );
};

const SectionHeader = (props) => {
  const { children, onClick } = props;
  return (
    <h1
      className="cursor-pointer hover:text-gray-400 transition-colors user-select-none"
      onClick={onClick}
    >
      {children}
    </h1>
  );
};

const HomeSection = () => {
  return (
    <Section>
      <SectionHeader>jw</SectionHeader>
    </Section>
  );
};

const ProjectsSection = ({ isOpen, toggleSection }) => {
  return (
    <div className="relative inline-block">
      <Section>
        <SectionHeader onClick={toggleSection}>projects</SectionHeader>
      </Section>
      <ProjectMenu isOpen={isOpen} />
    </div>
  );
};

const AboutSection = ({ isOpen, toggleSection }) => {
  const aboutContent = (
    <>
      <h1 className="text-xl font-bold mb-4">header text</h1>
      <p>
        body text body text body text body text body text body text body text
        body text{" "}
      </p>
    </>
  );

  return (
    <div className="relative inline-block">
      <Section>
        <SectionHeader onClick={toggleSection}>about</SectionHeader>
      </Section>
      <GenericSection isOpen={isOpen} content={aboutContent} />
    </div>
  );
};

const miscBars = [
  {
    title: "bar 1",
    level: Math.floor(Math.random() * 101),
  },
  {
    title: "bar 2",
    level: Math.floor(Math.random() * 101),
  },
];

const MiscSection = () => {
  return (
    <Section>
      <h1 className="text-2xl font-extrabold leading-snug">
        greetings this is <br /> placeholdertext
      </h1>
      <p className="text-lg text-gray-600 mt-4">
        blah blah blah more text
        <br />
        even more text
      </p>
      <button
        className={`bg-gray-600 text-white py-2 px-6 text-lg mt-2 opacity-25`}
      >
        button
      </button>
      <div className="mt-0 space-y-4">
        {miscBars.map((bar, index) => (
          <div></div>
        ))}
      </div>
    </Section>
  );
};

const MiscSection2 = ({ isOpen, toggleSection }) => {
  const miscContent = (
    <>
      <h1 className="text-xl font-bold mb-4">misc header</h1>
      <p>
        misc body text misc body text misc body text misc body text misc body
        text body text body text body text body text body text body text body
        text{" "}
      </p>
    </>
  );

  return (
    <div className="relative inline-block">
      <Section>
        <SectionHeader onClick={toggleSection}>misc</SectionHeader>
      </Section>
      <GenericSection isOpen={isOpen} content={miscContent} />
    </div>
  );
};

const MiscSection3 = ({ isOpen, toggleSection }) => {
  const moreMiscContent = (
    <>
      <h1 className="text-xl font-bold mb-4">gzm header</h1>
      <p>
        tmnxeq — Today at 3:33 PM kang understands derivs shows he is more perp
        punter than vc tmnxeq — Today at 3:35 PM might be cex related too fresh
        spot deposit from user easy naked short for in-house MM lawlchun — Today
        at 3:37 PM Always a good sign when the candle is so red it cuts off half
        of the volume tmnxeq — Today at 3:54 PM blip 2 has already been approved
        by the progress council and based on community feedback points will be
        granted to blast holders retroactively since time of tge.
      </p>
    </>
  );
  return (
    <div className="relative inline-block">
      <Section>
        <SectionHeader onClick={toggleSection}>gzm</SectionHeader>
      </Section>
      <GenericSection isOpen={isOpen} content={moreMiscContent} />
    </div>
  );
};

export const Interface = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (sectionName) => {
    if (openSection === sectionName) {
      setOpenSection(null);
    } else {
      setOpenSection(sectionName);
    }
  };

  return (
    <div className="absolute top-0 left-0 p-0 w-full h-full flex flex-col items-start z-10">
      <HomeSection />
      <ProjectsSection
        isOpen={openSection === "projects"}
        toggleSection={() => toggleSection("projects")}
      />
      <AboutSection
        isOpen={openSection === "about"}
        toggleSection={() => toggleSection("about")}
      />
      <MiscSection2
        isOpen={openSection === "misc"}
        toggleSection={() => toggleSection("misc")}
      />
      <MiscSection3
        isOpen={openSection === "gzm"}
        toggleSection={() => toggleSection("gzm")}
      />
    </div>
  );
};
