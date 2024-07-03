import React, { useEffect, useRef } from "react";
import anime from "animejs";

const Section = (props) => {
  const { children } = props;
  return (
    <section
      className={`
        hover:backdrop-hue-rotate-30
        w-screen p-4 mx-auto flex flex-col items-start justify-center
        transition-[backdrop-filter] duration-1000 ease-in-out
    `}
    >
      {children}
    </section>
  );
};

const HomeSection = () => {
  return (
    <Section>
      <h1>home section placeholder text</h1>
    </Section>
  );
};

const ProjectsSection = () => {
  return (
    <Section>
      <h1>projects section placeholder text</h1>
    </Section>
  );
};

const AboutSection = () => {
  return (
    <Section>
      <h1>misc section placeholder text</h1>
    </Section>
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

export const Interface = () => {
  return (
    <div className="flex flex-col items-center w-screen">
      <HomeSection />
      <ProjectsSection />
      <AboutSection />
      <MiscSection />
    </div>
  );
};
