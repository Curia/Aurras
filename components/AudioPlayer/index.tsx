// Imports
import React, { useState, useEffect } from "react";

// Icons
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
  const [mutedState, setmutedState] = useState(false);

  const audioEl = React.createRef<HTMLAudioElement>();
  const volumeEl = React.createRef<HTMLInputElement>();

  const handlePlay = (e) => {
    e.preventDefault();
    playState ? audioEl.current.play() : audioEl.current.pause();
    setPlayState(!playState);
  };

  const handleMute = (e) => {
    e.preventDefault();
    audioEl.current.muted = !mutedState;
    setmutedState(!mutedState);
  };

  const handleVolume = (e) => {
    audioEl.current.volume = e.target.value / 100;
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
    <>
      <audio loop={true} ref={audioEl} className="hidden">
        {srcMpeg ? <source src={srcMpeg} type="audio/mpeg" /> : null}
        {srcOgg ? <source src={srcOgg} type="audio/ogg" /> : null}
        {srcWav ? <source src={srcWav} type="audio/wav" /> : null}
        <p>
          Your browser does not support the <code>audio</code> element.
        </p>
      </audio>
      <button
        onClick={(e: React.MouseEvent<HTMLInputElement>) => handlePlay(e)}
      >
        {playState ? <BsFillPlayFill /> : <BsPauseFill />}
      </button>
      <button
        onClick={(e: React.MouseEvent<HTMLInputElement>) => handleMute(e)}
      >
        {mutedState ? <BsFillVolumeMuteFill /> : <BsFillVolumeUpFill />}
      </button>
      <input
        type="range"
        min="0"
        max="100"
        ref={volumeEl}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleVolume(e)}
      />
    </>
  );
};

export default AudioPlayer;
