import React from 'react';
import Meaning from '../Meaning/Meaning';

export default function MeaningsSection({ dictionaryEntry }) {
  /* Generally shouldn't use index as the key but since this is a
  static list and wont be changed, it should be fine. */
  return (
    <div>
      {dictionaryEntry.meanings.map((meaning, index) => (
        <ul>
          <li>
            <Meaning key={index} meaning={meaning} />
          </li>
        </ul>
      ))}
    </div>
  );
}
