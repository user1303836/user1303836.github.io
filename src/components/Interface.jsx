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

const ProjectsSection = () => {
  const [showProjects, setShowProjects] = useState(false);

  return (
    <div className="relative inline-block">
      <Section>
        <SectionHeader onClick={() => setShowProjects(!showProjects)}>
          projects
        </SectionHeader>
      </Section>
      <ProjectMenu isOpen={showProjects} />
    </div>
  );
};

const AboutSection = () => {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div className="relative inline-block">
      <Section>
        <SectionHeader onClick={() => setShowAbout(!showAbout)}>
          about
        </SectionHeader>
      </Section>
      <GenericSection isOpen={showAbout} />
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

const MiscSection2 = () => {
  return (
    <Section>
      <SectionHeader>misc</SectionHeader>
    </Section>
  );
};

const MiscSection3 = () => {
  return (
    <Section>
      <SectionHeader>gzm</SectionHeader>
    </Section>
  );
};

export const Interface = () => {
  return (
    <div className="absolute top-0 left-0 p-2 w-full h-full flex flex-col items-start z-10">
      <HomeSection />
      <ProjectsSection />
      <AboutSection />
      <MiscSection2 />
      <MiscSection3 />
    </div>
  );
};
