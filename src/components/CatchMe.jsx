export const CatchMe = () => {
  const location = document.querySelector(".butterfly");

  return (
    <div className="air">
      <img
        className="butterfly"
        src="./images/butterfly.png"
        width={"50px"}
        onMouseEnter={() => {
          console.log(location);
          location.style.transform = "100px 100px";
        }}
      />
    </div>
  );
};

// 3) Create a component that displays a button that says "Catch me".
// When you hover over it, it should reposition to a different place
// (use position absolute and transform: translate(...) with random values)
// so that it's impossible to actually catch and click it.
