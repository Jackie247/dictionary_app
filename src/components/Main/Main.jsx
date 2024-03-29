import React, { useState, useEffect } from 'react';
import Display from '../Display/Display';
import placeholderJson from '../../data/placeholder.json';
import SearchForm from '../SearchForm/SearchForm';

export default function Main() {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);
  const [data, setData] = useState(null);
  const [word, setWord] = useState('');

  const BASE_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${BASE_URL}${word}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const jsonData = await response.json();
      setData(jsonData);
      setFetchError(false);
    } catch (error) {
      setData(null);
      setFetchError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (word) {
      fetchData();
    }
  }, [word]);

  return (
    <main>
      <SearchForm setWord={setWord} />
      {!isLoading && fetchError && (
      <div>
        <h1 className="text-2xl dark:text-white">No results found. Please try another word.</h1>
      </div>
      )}
      {!isLoading && !fetchError && data && <Display wordInfo={data} word={word} />}
      {!isLoading && !fetchError && !data && <Display wordInfo={placeholderJson} word="placeholder" />}
    </main>
  );
}
