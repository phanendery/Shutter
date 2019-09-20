import React from "react";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName} onClick={handleClose}>
      <div className="modal-x" onClick={handleClose}>
        <i class="far fa-times-circle"></i>
      </div>
      <section
        className={"modal-main"}
        onClick={e => {
          e.stopPropagation();
        }}
      >
        {children}
        {/* <button className="close-button" onClick={handleClose}>
          Close
        </button> */}
      </section>
    </div>
  );
};

export default Modal;
