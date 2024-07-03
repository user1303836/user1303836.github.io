import React, { useEffect, useRef } from "react";
import anime from "animejs";

const projects = [
  { name: "maxmsp-utils", url: "https://user1303836.github.io/" },
  { name: "solana-newpair-sniper", url: "https://user1303836.github.io/" },
  { name: "yt-sampler", url: "https://user1303836.github.io/" },
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
      translateX: isOpen ? ["0%", "100%"] : ["100%", "0%"],
      opacity: isOpen ? [0, 1] : [1, 0],
      easing: "easeInOutQuad",
      duration: 600,
    });
  }, [isOpen]);

  return (
    <div
      ref={menuRef}
      className={`absolute -right-full top-0 p-0 h-full w-60 project-menu-initial-state ${
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
