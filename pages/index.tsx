import Head from "next/head";
import { GetStaticProps } from "next";

// Components
import AudioPlayer from "@components/AudioPlayer";

// Icons
import { WiThunderstorm, WiRain } from "react-icons/wi";
import {BiWater} from "react-icons/bi";
import {FaLeaf} from "react-icons/fa";

export default function Home({}: {}) {
  return (
    <>
      <div className="hero">
        <h1 className="hero__prompt text-5xl font-bold py-10 md:text-6xl md:py-20">
          Sound relaxation
        </h1>
      </div>
      <div className="flex flex-wrap -mx-2">
        <AudioPlayer
          srcMpeg="/storm.m4a"
          title="Sound 1"
          volume={0.2}
          Icon={WiThunderstorm}
        />
        <AudioPlayer
          srcMpeg="/storm.m4a"
          title="Sound 1"
          volume={0.2}
          Icon={WiRain}
        />
        <AudioPlayer
          srcMpeg="/storm.m4a"
          title="Sound 1"
          volume={0.2}
          Icon={BiWater}
        />
        <AudioPlayer
          srcMpeg="/storm.m4a"
          title="Sound 1"
          volume={0.2}
          Icon={FaLeaf}
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
