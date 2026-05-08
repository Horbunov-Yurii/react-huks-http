import React, { useEffect } from "react";
import style from "../Modal/Modal.module.css";

export default function Modal({ image, onClose }) {

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
        window.removeEventListener("keydown", handleKeyDown);
    }
  }, [onClose]);

  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div className={style.overlay} onClick={handleBackdrop}>
      <div className={style.modal}>
        <img className={style.image} src={image} alt="" />
      </div>
    </div>
  );
}
