import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = ({onClose}) => {
  return <div className={classes.backdrop} onClick={onClose} />;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");


function Modal({ children, onCloseCart }) {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onCloseCart} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
}

export default Modal;
