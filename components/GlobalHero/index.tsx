// Imports
import React from "react";

const GlobalHero: React.FC<{}> = () => {
  return (
    <div className="w-screen relative">
        <span
          className="absolute top-0 w-full h-full bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage:
              "url(/hero-banner.jpg)",
          }}
        ></span>
        <span className="absolute top-0 w-full h-full bg-black bg-opacity-25"></span>

      <div className="p-10 relative justify-center text-center">
        <h1 className="text-white font-serif font-black mt-5 text-5xl md:text-6xl md:mt-20">Sound Relaxation</h1>
      </div>
    </div>
  );
};

export default GlobalHero;
