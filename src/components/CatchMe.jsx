import { useRef } from "react";

export const CatchMe = () => {
  const imageRef = useRef();

  return (
    <section>
    <div className="air">
      <div className="butterfly" ref={imageRef}>
        <div className="catchMe">Catch Me ♥</div>
        <img
          src="./images/butterfly.png"
          width={"50px"}
          onMouseEnter={() => {
            // const location = document.querySelector(".butterfly");
            let x = Math.floor(Math.random() * (150 + 150)) -150;
            let y = Math.floor(Math.random() * (150 + 150)) -150;
            console.log(x, y);
            imageRef.current.style.transform = `translate(${x}px, ${y}px)`;
          }}
        />
      </div>
    </div> 
    </section>
  );
};

// It’s the same number because the component doesn’t rerender.
// If you want the number to change every time the mouse reaches the butterfly image,
// then you have to generate a new one within the event callback (onMouseEnter)

// 3) Create a component that displays a button that says "Catch me".
// When you hover over it, it should reposition to a different place
// (use position absolute and transform: translate(...) with random values)
// so that it's impossible to actually catch and click it.
