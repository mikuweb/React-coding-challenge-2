import { useState } from "react";

export const SortAnimals = () => {

  const [count, setCount] = useState([
    {
      name: "🐶dog",
      count: 0,
    },
    {
      name: "😺cat",
      count: 0,
    },
    {
      name: "🐔chicken",
      count: 0,
    },
    {
      name: "🐮cow",
      count: 0,
    },
    {
      name: "🐏sheep",
      count: 0,
    },
    {
      name: "🐴horse",
      count: 0,
    },
  ]);

  const animalCopy = [...count];
  animalCopy.sort((a, b) => b.count - a.count);

  return (
    <section>
    <h2>Which Animal do you like the most?</h2>
      <ul className="animals">
        {animalCopy.map((animal, index) => {
          return (
            <div className="animal_container">
              <li
                key={index}
                onClick={() => {
                  setCount(() => {
                    const newCount = [...animalCopy];
                    newCount[index].count = newCount[index].count + 1;
                    return newCount;
                  });
                }}
              >
                {animal.name}
              </li>
              <span className="count">{animal.count}</span>
            </div>
          );
        })}
      </ul>
    </section>
  );
};

// It doesn’t work outside because you are not passing the index to it.
// If you want index to be known within the function  body you have pass it in there.
// When it’s inlined inside the callback then it is know because index is defined within the upper scope.
// Be careful with .sort as it mutates your array. You have to make a copy first.
// But also: you would need to sort your emoji array in the same way.
// Otherwise you’ll only sort the numbers but they will be assigned to the wrong animal after sorting.
// Search how to sort two arrays at once. :)
// ?? https://stackoverflow.com/questions/11499268/sort-two-arrays-the-same-way

// 2) Show a list of emoji like this:
// https://coderfiles.dev/static/ac33f6d2673177e812df7d2088d65fa3/98399/ex6b.webp
// When one of the entries is clicked it should also display a number depending on how often it was clicked.
// The entries with the highest number should be at the top and it should be sorted in a descending fashion.

// It was smart that you started with a list of animals in an array and mapping over them is also correct.
// however one useState with just a number is not sufficient since you need more than one number.
// Each animal needs its own number.
// So it would be better if useState would hold an array with numbers like this useState([0,0,0,0,0...]).
// The first element in the array would correspond to the first animal,
// the second element to the second animal and so on and so forth.
// Then you need an onClick handler on each of the animals (which is what you did). However it should be called like this:
// onClick={() => {setCount(s => {const newCount=[...s]; newCount[index] = newCount[index] + 1;
// return newCount})}}. And the span in which you display the count you'd do count[index].
