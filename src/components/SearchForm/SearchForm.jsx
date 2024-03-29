import React from 'react';
import { useForm } from 'react-hook-form';

export default function SearchForm({ setWord }) {
  const form = useForm();
  const {
    register, handleSubmit, formState,
  } = form;
  const { errors } = formState;

  const onSubmit = (data) => {
    setWord(data.word);
  };

  return (
    <div>
      <form
        className="flex justify-between bg-gray-200 dark:bg-dark-black my-4 rounded-md sm:my-8"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className="flex items-center w-full">
          <input
            type="text"
            className="p-2 bg-transparent font-semibold flex-grow dark:text-white w-full lg:p-3 lg:text-xl"
            id="word-input"
            name="word"
            placeholder="Enter a word to search..."
            autoComplete="off"
            {...register('word', {
              required: 'Word is required',
              validate: (value) => /^[A-Za-z]+$/.test(value) || 'Did you mean to include that number?',
            })}
          />
          <button type="submit" className="p-2 mx-2 h-10 w-10 hover:scale-125 transform transition duration-200 lg:h-10 lg:w-12">
            <svg
              className="h-full w-full"
              xmlns="http://www.w3.org/2000/svg"
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
        <p className="text-sm text-red absolute top-32 lg:top-40">{errors.word?.message}</p>
      </form>
    </div>
  );
}
