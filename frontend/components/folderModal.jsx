import React from "react";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName} onClick={handleClose}>
      <section
        className={"modal-main3"}
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
