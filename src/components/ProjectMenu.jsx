import React, { useEffect, useRef } from "react";
import anime from "animejs";

const projects = [
  { name: "maxmsp-utils", url: "https://github.com/user1303836/maxmsp-utils" },
  {
    name: "solana-newpair-sniper",
    url: "https://github.com/user1303836/sol-newpair-sniper",
  },
  { name: "yt-sampler", url: "https://github.com/user1303836/yt-sampler" },
  { name: "chatter", url: "https://user1303836.github.io/" },
];

const ProjectMenu = ({ isOpen }) => {
  const menuRef = useRef(null);
  const isInitialRender = useRef(true);

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    anime({
      targets: menuRef.current,
      translateX: isOpen ? ["-100%", "0%"] : ["0%", "-500%"],
      opacity: isOpen ? [-2, 1] : [1, -1],
      easing: "easeInOutSine",
      duration: 50,
    });
  }, [isOpen]);

  return (
    <div
      ref={menuRef}
      className={`absolute left-full top-0 p-0 h-full w-60 project-menu-initial-state ${
        !isInitialRender.current ? "transform" : ""
      } z-20`}
    >
      <ul className="space-y-0">
        {projects.map((project, index) => (
          <li key={index}>
            <div className="bg-white bg-opacity-10 transform backdrop-blur-sm">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-300 transition-colors"
              >
                {project.name}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectMenu;
