// Imports
import React from "react";
import Link from "next/link";

// Icons
import { VscGithubInverted } from "react-icons/vsc";

const GlobalHeader: React.FC<{}> = () => {
  return (
    <header className="flex justify-between items-center p-3">
      <span className="font-sans font-bold text-xl tracking-wide">Aurras</span>
      <a href="https://github.com/Curia/aurras">
        <VscGithubInverted className="text-xl" />
      </a>
    </header>
  );
};

export default GlobalHeader;
