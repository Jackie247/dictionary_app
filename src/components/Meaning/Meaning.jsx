import React from 'react';

export default function Meaning({ meaning }) {
  /* Generally shouldn't use index as the key but since this is a
  static list and wont be changed, it should be fine. */
  return (
    <div className="meaning flex flex-col">
      <span className="font-bold">{meaning.partOfSpeech}</span>
      <span className="text-grey">Meaning</span>
      <ul className="list-disc pl-5">
        {meaning.definitions.map((definition, index) => (
          <li key={index} className="custom-bullet">
            {definition.definition}
            {definition.example && (
              <span className="inline-block">
                &quot;
                {definition.example}
                &quot;
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
