import React from 'react';
import MeaningsSection from '../MeaningsSection/MeaningsSection';
import AudioPlayer from '../AudioPlayer/AudioPlayer';

export default function Display({ word, wordInfo }) {
  console.log('Data from API call:', wordInfo);

  const entryData = wordInfo[0];

  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-4xl font-semibold mb-2 dark:text-white lg:text-5xl">{word}</h1>
          <span className="text-custom-purple">{entryData?.phonetic}</span>
        </div>
        <AudioPlayer entryData={entryData} />
      </div>

      <MeaningsSection dictionaryEntry={entryData} />

      <div>
        <div className="w-full bg-grey h-[1px] bg-opacity-15 my-4" />
        <span className="underline text-grey">Source:</span>
        <div className="flex items-center">
          <span className="text-sm mr-2 underline dark:text-white lg:text-lg w-full overflow-hidden">
            {entryData?.sourceUrls[0]}
          </span>
          <div className="h-3 w-3 lg:h-4 lg:w-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 14 14"><path fill="none" stroke="#838383" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.09 3.545H2.456A1.455 1.455 0 0 0 1 5v6.545A1.455 1.455 0 0 0 2.455 13H9a1.455 1.455 0 0 0 1.455-1.455V7.91m-5.091.727 7.272-7.272m0 0H9m3.636 0V5" /></svg>
          </div>
        </div>
      </div>

    </section>
  );
}
