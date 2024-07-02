import React, { useEffect, useRef } from "react";
import anime from "animejs";

function App() {
  const navRef = useRef(null);

  useEffect(() => {
    anime({
      targets: navRef.current.children,
      translateY: [0, 1],
      opacity: [0, 1],
      delay: anime.stagger(100),
      easing: "easeOutElastic",
      duration: 2500,
    });
  }, []);

  return (
    <div className="flex min-h-screen font-system">
      <div className="w-40 p-6 bg-gray-50 gradient-overlay">
        <h2
          href="/"
          className="text-1xl font-bold mb-10 cursor-pointer hover:text-gray-600"
        >
          jw
        </h2>
        <nav className="relative ">
          <ul ref={navRef} className="space-y-4 relative z-10">
            <li className="cursor-pointer hover:text-gray-600 transition-colors">
              projects
            </li>
            <li className="cursor-pointer hover:text-gray-600 transition-colors">
              about
            </li>
            <li className="cursor-pointer hover:text-gray-600 transition-colors">
              misc
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex-grow p-6">{/* Main content will go here */}</div>
    </div>
  );
}

export default App;
