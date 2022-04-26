import React, { useState } from "react";

export const App = () => {
  const [word, setWord] = useState<string>("");
  const [isPalindrome, setIsPalindrome] = useState<boolean>(false);
  const [output, setOutput] = useState<boolean>(false);

  const checkWord = () => {
    setOutput(true);
    const letters: RegExpMatchArray | null = word
      .toLowerCase()
      .match(/[a-z0-9]/g);

    letters!.join("") === letters!.reverse().join("")
      ? setIsPalindrome(true)
      : setIsPalindrome(false);

    // non-null assertion operator ! (https://stackoverflow.com/questions/40349987/how-to-suppress-error-ts2533-object-is-possibly-null-or-undefined)
  };

  const clearInput = () => {
    setWord("");
    setIsPalindrome(false);
    setOutput(false);
  };

  return (
    <div className="h-screen w-screen font-mono">
      <h1 className="my-8 text-center text-4xl font-bold text-red-600">
        Palindrome Checker
      </h1>

      <div className="mx-8 grid space-y-8 text-center text-neutral-200">
        <label className="italic">
          Type a word or phrase to check if it's a palindrome (e.g. 'tacocat')
        </label>
        <input
          onChange={(e) => setWord(e.target.value)}
          value={word}
          id="input-field"
          type="text"
          className="mx-auto w-96 border-2 border-neutral-200 bg-inherit p-2 caret-red-600"
          placeholder="Type something..."
        />

        <div className="mx-auto flex w-96 justify-between text-slate-900">
          <button
            onClick={checkWord}
            className="border-2 border-neutral-200 bg-neutral-200 p-2 px-6 lg:hover:bg-slate-900 lg:hover:text-red-600"
          >
            Check word
          </button>
          <button
            onClick={clearInput}
            className="border-2 border-neutral-200 bg-neutral-200 p-2 px-6 lg:hover:bg-slate-900 lg:hover:text-red-600"
          >
            Clear input
          </button>
        </div>

        <div className="mx-auto w-96 border-2 border-neutral-200 p-2">
          {output ? (
            <p>
              {isPalindrome
                ? `${word} is a palindrome! 😁`
                : `${word} is not a palindrome! 😥`}
            </p>
          ) : (
            <p>Type something fun!</p>
          )}
        </div>
      </div>
    </div>
  );
};
