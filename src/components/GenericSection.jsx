import React, { useEffect, useRef } from "react";
import anime from "animejs";

const GenericSection = ({ isOpen, content }) => {
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
      duration: 10,
    });
  }, [isOpen]);

  return (
    <div
      ref={menuRef}
      className={`fixed top-0 left-20 p-0 h-full w-80 project-menu-initial-state ${
        !isInitialRender.current ? "transform" : ""
      } z-20`}
    >
      <div className="p-0">{content}</div>
    </div>
  );
};

export default GenericSection;
