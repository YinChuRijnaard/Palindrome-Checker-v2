import React from "react";

export const App = () => {
  return (
    <div className="h-screen w-screen font-mono">
      <h1 className="my-8 text-center text-4xl font-bold text-red-600">
        Palindrome Checker
      </h1>

      <div className="mx-8 grid space-y-8 text-center text-neutral-200">
        <label className="italic">
          Type a word or phrase to check if it's a palindrome (e.g. tacocat)
        </label>
        <input
          type="text"
          className="mx-auto w-96 border-2 border-neutral-200 bg-inherit p-2 caret-red-600 shadow-md shadow-red-600"
          placeholder="Type something..."
        />

        <div className="space-x-8 text-slate-900">
          <button className="bg-neutral-200 p-2 px-6">Check word</button>
          <button className="bg-neutral-200 p-2 px-6">Clear history</button>
        </div>

        <div className="bg-yellow-300">{/* Output will go here */}</div>
      </div>
    </div>
  );
};
