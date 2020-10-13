// Imports
import React, { useState, useEffect } from "react";

interface AudioPlayerProps {
  caption: string;
  srcMpeg?: string;
  srcOgg?: string;
  srcWav?: string;
  loop?: boolean;
  volume?: number;
  muted?: boolean;
  background?: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({
  caption,
  srcMpeg,
  srcOgg,
  srcWav,
  volume,
  background,
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
    <div>
      <audio loop={true} ref={audioEl} className="w-full hidden">
        {srcMpeg ? <source src={srcMpeg} type="audio/mpeg" /> : null}
        {srcOgg ? <source src={srcOgg} type="audio/ogg" /> : null}
        {srcWav ? <source src={srcWav} type="audio/wav" /> : null}
        <p>
          Your browser does not support the <code>audio</code> element.
        </p>
      </audio>
      <button
        className={`relative w-full flex justify-center focus:outline-none ${
          playState ? "filter-grayscale-80" : null
        }`}
        onClick={(e) => handlePlay(e)}
      >
        <img src={background} />
        <div className="absolute bottom-0 left-0 p-2 w-full text-left bg-black bg-opacity-25">
          <span className="text-white">{caption}</span>
        </div>
      </button>
      <div className={`w-full p-3 ${playState ? "cursor-not-allowed" : null}`}>
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
  );
};

export default AudioPlayer;
