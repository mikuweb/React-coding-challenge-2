export const ChangeColorCircle = () => {
  return (
    <>
      <span className="circle" style={{color: "red"}}>〇</span>
      <button
        onClick={() => {
          let circle = document.querySelector(".circle");
          console.log(circle);
            circle.style.color === "red"
              ? (circle.style.color = "darkblue")
              : (circle.style.color = "red");
        }}
        className="btn"
      >
        Change Color
      </button>
    </>
  );
};

// Question: Why first qlick doesn't work??

// 1) Make a component that displays a checkbox and a red circle.
//    If the checkbox is checked, the circle should turn dark blue.
//    When it is unchecked it should turn red.
//    The transition should be animated.
