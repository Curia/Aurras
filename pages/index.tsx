import Head from "next/head";
import { GetStaticProps } from "next";

// Components
import AudioPlayer from "@components/AudioPlayer";

// Icons
import { WiThunderstorm, WiRain } from "react-icons/wi";

export default function Home({}: {}) {
  return (
    <>
      <div className="hero">
        <h1 className="hero__prompt text-6xl font-bold text-center">
          Sound relaxation
        </h1>
      </div>
      <div className="flex flex-wrap">
        <AudioPlayer
          srcMpeg="/storm.m4a"
          title="Sound 1"
          volume={0.2}
          Icon={WiThunderstorm}
          controls={false}
        />
        <AudioPlayer
          srcMpeg="/storm.m4a"
          title="Sound 1"
          volume={0.2}
          Icon={WiRain}
          controls={true}
        />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
