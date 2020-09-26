// Imports
import React, { useState, useEffect } from "react";
import Link from "next/link";

// Icons
import { VscPlay, VscDebugPause } from "react-icons/vsc";
import {
  BsFillPlayFill,
  BsPauseFill,
  BsFillVolumeMuteFill,
  BsFillVolumeUpFill,
} from "react-icons/bs";

interface AudioPlayerProps {
  title: string;
  srcMpeg?: string;
  srcOgg?: string;
  srcWav?: string;
  loop?: boolean;
  volume?: number;
  muted?: boolean;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({
  srcMpeg,
  srcOgg,
  srcWav,
  volume,
}) => {
  const [playState, setPlayState] = useState(true);
  const audioEl = React.createRef<HTMLAudioElement>();

  const handlePlay = (e) => {
    e.preventDefault();
    playState ? audioEl.current.play() : audioEl.current.pause();
    setPlayState(!playState);
  };

  useEffect(() => {
    // Set player volume
    if (audioEl.current) {
      volume = volume ? volume : 0.1;
      volume !== audioEl.current.volume
        ? (audioEl.current.volume = volume)
        : null;
    }
  });

  return (
    <>
      <audio controls ref={audioEl}>
        {srcMpeg ? <source src={srcMpeg} type="audio/mpeg" /> : null}
        {srcOgg ? <source src={srcOgg} type="audio/ogg" /> : null}
        {srcWav ? <source src={srcWav} type="audio/wav" /> : null}
        <p>
          Your browser does not support the <code>audio</code> element.
        </p>
      </audio>
      <button onClick={(e) => handlePlay(e)}>
        {playState ? <BsFillPlayFill /> : <BsPauseFill />}
      </button>
    </>
  );
};

export default AudioPlayer;
