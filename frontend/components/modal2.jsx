import React from "react";

const Modal2 = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <section className={"modal-main2"}>
        <div className="green" />
        <div className="white"></div>
        {children}
        {/* <button className="close-button2" onClick={handleClose}>
          Cancel
        </button> */}
      </section>
    </div>
  );
};

export default Modal2;
