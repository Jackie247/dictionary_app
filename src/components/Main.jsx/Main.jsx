import React, { useEffect, useState } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import Display from '../Display/Display';

export default function Main() {
  const [data, setData] = useState(null);
  const [word, setWord] = useState('');

  const BASE_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

  useEffect(() => {
    console.log(data);
  }, [data]);
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
    <div className="bg-white dark:bg-slate-800">
      <Searchbar fetchData={fetchData} setWord={setWord} />
      {data && <Display wordInfo={data} word={word} />}
    </div>
  );
}
