// Imports
import React from "react";
import Link from "next/link";

// Icons
import { VscGithubInverted } from "react-icons/vsc";

const GlobalHeader: React.FC<{}> = () => {
  return (
    <header className="flex justify-between items-center py-4 mb-4 md:py-8 md:mb-8">
      <span className="font-sans font-bold text-xl tracking-wide md:text-4xl">Aurras</span>
      <a href="https://github.com/Curia/aurras">
        <VscGithubInverted className="text-xl md:text-4xl" />
      </a>
    </header>
  );
};

export default GlobalHeader;
