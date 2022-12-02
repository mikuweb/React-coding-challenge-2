export const ChangeColorCircle = () => {
  return (
    <>
      <span className="circle">〇</span>
      <button
        onClick={() => {
          let circle = document.querySelector(".circle");
          console.log(circle);
            circle.style.color === "darkblue"
              ? (circle.style.color = "green")
              : (circle.style.color = "darkblue");
        }}
        className="btn_changeColor"
      >
        Change Color
      </button>
    </>
  );
};

// 1) Make a component that displays a checkbox and a dark blue circle.
//    If the checkbox is checked, the circle should turn green.
//    When it is unchecked it should turn dark blue.
//    The transition should be animated.
