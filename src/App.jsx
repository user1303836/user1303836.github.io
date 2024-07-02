import React from "react";

function App() {
  return (
    <div className="flex min-h-screen font-system">
      <div className="w-64 p-6 bg-gray-100">
        <h2
          href="/"
          className="text-1xl font-bold mb-10 cursor-pointer hover:text-gray-600"
        >
          jw
        </h2>
        <nav>
          <ul className="space-y-4">
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
