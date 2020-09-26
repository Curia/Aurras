// Imports
import * as React from "react";
import Link from "next/link";

// Icons
import { VscGithubInverted } from "react-icons/vsc";

const GlobalHeader: React.FC<{}> = () => {
  return (
    <header className="flex justify-between items-center p-3">
      <span className="font-sans font-bold text-xl tracking-wide">Aurras</span>
      <Link href="https://github.com/Curia/aurras" passHref={true}>
        <VscGithubInverted className="text-xl" />
      </Link>
    </header>
  );
};

export default GlobalHeader;
