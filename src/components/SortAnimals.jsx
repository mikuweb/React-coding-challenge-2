import { useState } from "react";

export const SortAnimals = () => {
  const animals = [
    "🐶dog",
    "😺cat",
    "🐔chicken",
    "🐮cow",
    "🐏sheep",
    "🐴horse",
  ];

  const [count, setCount] = useState(0);
  const countClick = (e) => {
    setCount(count + 1);
    console.log(e.target);
  };

  return (
    <>
      <ul className="animals">
        {animals.map((animal, index) => {
          return (
            <>
              <li key={index} onClick={countClick}>
                {" "}
                {animal}{" "}
              </li>
              <span className="count">{count}</span>
            </>
          );
        })}
      </ul>
    </>
  );
};

// 2) Show a list of emoji like this:
// https://coderfiles.dev/static/ac33f6d2673177e812df7d2088d65fa3/98399/ex6b.webp
// When one of the entries is clicked it should also display a number depending on how often it was clicked.
// The entries with the highest number should be at the top and it should be sorted in a descending fashion.
