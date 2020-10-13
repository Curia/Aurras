import { GetStaticProps } from "next";

// Components
import GlobalHero from "@components/GlobalHero";
import AudioPlayer from "@components/AudioPlayer";

const natureAudio = [
  {
    src: "/storm.m4a",
    caption: "Ocean",
    background: "/audio-ocean.jpg",
  },
  {
    src: "/storm.m4a",
    caption: "Rain",
    background: "/audio-rain.jpg",
  },
  {
    src: "/storm.m4a",
    caption: "Rain",
    background: "/audio-storm.jpg",
  },
];

const ambientAudio = [
  {
    src: "/storm.m4a",
    caption: "Ocean",
    background: "/audio-ocean.jpg",
  },
  {
    src: "/storm.m4a",
    caption: "Rain",
    background: "/audio-rain.jpg",
  },
  {
    src: "/storm.m4a",
    caption: "Rain",
    background: "/audio-storm.jpg",
  },
];

export default function Home({}: {}) {
  return (
    <>
      <GlobalHero />
      <div className="container mx-auto px-4 md:px-0">
        <div className="py-5 px-4">
          <h2 className="text-black font-serif font-black text-3xl md:text-5xl">
            Nature
          </h2>
        </div>
        <div className="px-2">
          <div className="flex flex-wrap -mx-2">
            {natureAudio.map((audio, key) => (
              <div className="w-full md:w-1/3 px-4" key={key}>
                <AudioPlayer
                  srcMpeg={audio.src}
                  caption={audio.caption}
                  volume={0.2}
                  background={audio.background}
                />
              </div>
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
