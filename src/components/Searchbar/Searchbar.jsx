import React from 'react';

export default function Searchbar({ setWord, fetchData }) {
  return (
    <div className="flex justify-between bg-gray-200 dark:bg-dark-black my-4 p-2 rounded-md sm:my-8">
      <input
        id="word-search"
        className="bg-transparent font-semibold flex-grow dark:text-white"
        placeholder="Enter a word to search..."
        onChange={(e) => setWord(e.target.value)}
      />
      <div className="flex justify-center items-center ml-2">
        <button onClick={fetchData}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path
              fill="none"
              stroke="#A445ED"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
