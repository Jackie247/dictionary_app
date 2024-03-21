import React from 'react';
import MeaningsSection from '../MeaningsSection/MeaningsSection';

export default function Display({ word, wordInfo }) {
  console.log('The data is:', wordInfo);

  const entryData = wordInfo[0];
  return (
    <section>
      <div className="flex justify-between">
        <div>
          <h1 className="text-4xl font-semibold">{word}</h1>
          <span className="text-custom-purple">{entryData.phonetic}</span>
        </div>
        <div>
          <button type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="75"
              height="75"
              viewBox="0 0 75 75"
            >
              <g fill="#A445ED" fillRule="evenodd">
                <circle cx="37.5" cy="37.5" r="37.5" opacity=".25" />
                <path d="M29 27v21l21-10.5z" />
              </g>
            </svg>
          </button>
        </div>
      </div>

      <MeaningsSection dictionaryEntry={entryData} />

      <span>
        Source:
        {entryData.sourceUrls[0]}
      </span>
    </section>
  );
}
