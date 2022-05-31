import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

function Modal(props) {
  const { message, hideModal } = props;
  const modal = document.getElementById("modal-root");
  return ReactDOM.createPortal(
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.message}>{message}</div>
        <div onClick={hideModal} className={classes.ok}>
          x
        </div>
      </div>
    </div>,
    modal
  );
}

export default Modal;
