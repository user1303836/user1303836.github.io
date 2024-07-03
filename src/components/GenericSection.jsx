import React, { useEffect, useRef } from "react";
import anime from "animejs";

const GenericSection = ({ isOpen }) => {
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
      <h1>blah</h1>
    </div>
  );
};

export default GenericSection;
