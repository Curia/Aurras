// Imports
import React, { useState, useEffect } from "react";

// Icons
import {
  BsFillPlayFill,
  BsPauseFill,
  BsFillVolumeMuteFill,
  BsFillVolumeUpFill,
} from "react-icons/bs";
import { IconType } from "react-icons/lib";

interface AudioPlayerProps {
  title: string;
  srcMpeg?: string;
  srcOgg?: string;
  srcWav?: string;
  loop?: boolean;
  volume?: number;
  muted?: boolean;
  Icon: IconType;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({
  srcMpeg,
  srcOgg,
  srcWav,
  volume,
  Icon,
}) => {
  const [playState, setPlayState] = useState(true);
  const audioEl = React.createRef<HTMLAudioElement>();
  const volumeEl = React.createRef<HTMLInputElement>();

  const handlePlay = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    playState ? audioEl.current.play() : audioEl.current.pause();
    setPlayState(!playState);
  };

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    audioEl.current.volume = parseInt(e.target.value) / 100;
  };

  useEffect(() => {
    // Set player volume
    if (audioEl.current) {
      volume = volume ? volume : 0.1;
      volumeEl.current.value = (volume * 100).toString();
      volume !== audioEl.current.volume
        ? (audioEl.current.volume = volume)
        : null;
    }
  }, []);

  return (
    <div className="w-1/2 md:w-1/3 lg:w-1/4 flex flex-wrap justify-center px-2">
      <div className={`rounded ${playState ? null : "bg-spring"}`}>
        <audio loop={true} ref={audioEl} className="w-full hidden">
          {srcMpeg ? <source src={srcMpeg} type="audio/mpeg" /> : null}
          {srcOgg ? <source src={srcOgg} type="audio/ogg" /> : null}
          {srcWav ? <source src={srcWav} type="audio/wav" /> : null}
          <p>
            Your browser does not support the <code>audio</code> element.
          </p>
        </audio>
        <button
          className="w-full p-3 flex justify-center focus:outline-none"
          onClick={(e) => handlePlay(e)}
        >
          <Icon
            className={`text-6xl ${playState ? "text-grey" : "text-black"}`}
          />
        </button>
        <div className={`w-full p-3 ${playState ? 'cursor-not-allowed' : null}`}>
          <input
            disabled={playState}
            type="range"
            min="0"
            max="100"
            ref={volumeEl}
            onChange={(e) => handleVolume(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
