import React, { useRef } from 'react';

export default function AudioPlayer({ entryData }) {
  const audioObj = entryData?.phonetics.find((obj) => obj.audio.includes('https'));
  console.log(audioObj.audio);

  const audioRef = useRef(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div id="audio-btn" className="w-12 h-12">
      {audioObj && (
        <audio ref={audioRef}>
          <source src={audioObj.audio} type="audio/mpeg" />
        </audio>
      )}
      <button type="button" onClick={playAudio}>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 75 75">
          <g fill="#A445ED" fillRule="evenodd">
            <circle cx="37.5" cy="37.5" r="37.5" opacity=".25" />
            <path d="M29 27v21l21-10.5z" />
          </g>
        </svg>
      </button>
    </div>
  );
}
