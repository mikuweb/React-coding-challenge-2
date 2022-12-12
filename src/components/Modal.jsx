export const Modal = ({ showModal, setShowModal }) => {
  
  const modalClose = () => {
    setShowModal((preClick) => !preClick);
  };

  return (
    <>
      {showModal ? (
        <div className="modal_background">
          <div className="modal_wrapper">
            <h2 className="modal_text">Hello, I am a Modal</h2>
            <button className="btn" onClick={modalClose}>
              Close
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};
