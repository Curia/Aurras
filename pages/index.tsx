import { GetStaticProps } from "next";

// Components
import GlobalHero from "@components/GlobalHero";
import AudioPlayer from "@components/AudioPlayer";

// Icons
import { WiThunderstorm, WiRain } from "react-icons/wi";
import { BiWater } from "react-icons/bi";

const audioList = [
  {
    src: "/storm.m4a",
    title: "Sound",
    icon: WiThunderstorm,
  },
  {
    src: "/storm.m4a",
    title: "Sound",
    icon: WiRain,
  },
  {
    src: "/storm.m4a",
    title: "Sound",
    icon: BiWater,
  },
];

export default function Home({}: {}) {
  return (
    <>
    <GlobalHero />
    <div className="container mx-auto px-4 md:px-0">
      <div className="flex flex-wrap p-2">
        <div className="w-full">
          {audioList.map((audio, key) => (
            <AudioPlayer
              srcMpeg={audio.src}
              title={audio.title}
              volume={0.2}
              Icon={audio.icon}
            />
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
