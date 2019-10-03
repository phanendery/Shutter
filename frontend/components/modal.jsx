import React from "react";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName} onClick={handleClose}>
      {/* <div className="modal-x" onClick={handleClose}>
        <i className="far fa-times-circle"></i>
      </div> */}
      <section
        className={"modal-main"}
        onClick={e => {
          e.stopPropagation();
        }}
      >
        {children}
      </section>
    </div>
  );
};

export default Modal;
