import React from 'react';

export default function Meaning({ meaning }) {
  /* Generally shouldn't use index as the key but since this is a
  static list and wont be changed, it should be fine. */
  return (
    <div className="meaning flex flex-col mb-4">
      <div className="flex items-center">
        <span className="font-bold mr-2 dark:text-white italic">{meaning.partOfSpeech}</span>
        <div className="w-full bg-grey h-[1px] bg-opacity-15" />
      </div>
      <span className="text-grey my-4">Meaning</span>
      <ul className="list-disc pl-5 text-sm dark:text-white sm:text-md">
        {meaning.definitions.map((definition, index) => (
          <li key={index} className="custom-bullet sm:text-md lg:text-md">
            {definition.definition}
            {definition.example && (
              <span className="inline-block mt-2 italic text-grey">
                &quot;
                {definition.example}
                &quot;
              </span>
            )}
          </li>
        ))}
      </ul>
      {meaning.synonyms.length > 0 && (
        <div className="mt-8">
          <span className="mr-4 text-grey">
            Synonyms
          </span>
          <span className="text-accent-purple font-semibold">{meaning.synonyms.join(', ')}</span>
        </div>

      )}
    </div>
  );
}
