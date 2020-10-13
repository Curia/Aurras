// Imports
import React from "react";

const GlobalHeader: React.FC<{}> = () => {
  return (
    <header className="fixed w-full z-10">
      <div className="container mx-auto px-4 md:px-0">
      <div className="flex w-full justify-between items-center py-2">
        <span className="text-white font-sans font-semibold text-xl md:text-2xl">
          Aurras
        </span>
        <div className="">
          <ul className="text-white text-sm font-semibold">
            <li className="p-2 hover:text-gray-400">
              <a href="https://github.com/Curia/aurras">Github</a>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </header>
  );
};

export default GlobalHeader;
