import React, { useState } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import Display from '../Display/Display';
import placeholderJson from '../../data/placeholder.json';

export default function Main() {
  const [data, setData] = useState(null);
  const [word, setWord] = useState('');

  const BASE_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

  const fetchData = async () => {
    try {
      const response = await fetch(`${BASE_URL}${word}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      // Reset data or set an error message
      setData(null);
    }
  };

  return (
    <main>
      <Searchbar fetchData={fetchData} setWord={setWord} />
      {data ? <Display wordInfo={data} word={word} /> : <Display wordInfo={placeholderJson} word="placeholder" />}
    </main>
  );
}
