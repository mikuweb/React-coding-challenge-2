import { useRef, useState } from "react";

export const GuessTheNumber = () => {
  const [number, setNumber] = useState("");
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * (9 - 1)) + 1
  );
  const [count, setCount] = useState(0);
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setNumber(inputRef.current.value);
    setCount((c) => c + 1);
    inputRef.current.value = "";
    console.log(number, randomNumber);
  };

  const handleReset = () => {
    setRandomNumber(Math.floor(Math.random() * (9 - 1)) + 1);
    setNumber("");
    setCount(0);
    inputRef.current.value = "";
  };

  return (
    <section>
      <h2>Guess the number! (1 ~ 9)</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          ref={inputRef}
          type="number"
          placeholder="Type number.."
        />

        <button className="btn">Submit</button>
      </form>
      {number !== "" &&
        (number == randomNumber ? (
          <>
            <div>Perfect!</div>
            <div>You clicked {count} times.</div>
            <button className="btn" onClick={handleReset}>
              Reset
            </button>
          </>
        ) : number > randomNumber ? (
          <div>Too high! Try again</div>
        ) : (
          <div>Too low! Try again</div>
        ))}
    </section>
  );
};

// 6) Build a number-guessing game:
// Build a component that displays a headline:
// "Guess the number" and an input for numbers.
// When a user enters a number, the component will also display a text saying:
// "Too low", "Too high" or "Perfect" when the user hit enter.
// The number input should then be cleared.
// When the user guesses the correct number the text should be "Perfect"
// and the component should display how many times the user had to guess.
// Then a reset button should be displayed.
// That reset button should clear the text,
// reset the counter for the number of guesses
// and make it so that another number must be guessed.
