import { useState } from "react";
import { Modal } from "./Modal";

export const OpenModal = () => {
  const [showModal, setShowModal] = useState(false);
  const modalClick = () => {
    setShowModal((preClick) => !preClick);
    console.log(showModal);
  };


  return (
    <>
      <button className="btn" onClick={modalClick}>
        Open Modal
      </button>
      <Modal showModal={showModal} setShowModal={setShowModal}/>
    </>
  );
};

// Question: How can I cover entire screen with background of the modal?
// Quesition: position: relative; ←Why? I don't understand how it works.

// 4) Make a component that displays a button with the text "Open Modal".
// When the button is clicked a div should appear in the center of the page,
// above all other things on the page (position: absolute or position: fixed can help here).
// That div should have a box-shadow so it appears like it's floating.
// Inside this div there should be a text: "Hello, I am a Modal" and a button with the text "Close".
// When the "Close" Button is clicked, the div should disappear again.
