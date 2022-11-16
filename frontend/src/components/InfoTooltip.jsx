import React from "react";
import successIcon from "../images/success.svg";
import failIcon from "../images/fail.svg";

function InfoToolTip(props) {
  const handleOverlayClose = (event) => {
    if (event.target !== event.currentTarget) {
      return;
    }
    onclose();
  };

  return (
    <div
      onClick={handleOverlayClose}
      className={`popup ${props.isOpen && "popup_opened"}`}
    >
      <div className="popup__container popup__container_no-form">
        <button
          className="popup__close-button"
          type="button"
          onClick={props.onClose}
        ></button>
        <img
          className="popup__icon"
          src={props.onSuccessRegister ? successIcon : failIcon}
          alt={
            props.onSuccessRegister
              ? "Успешная регистрация"
              : "Неудачная регистрация"
          }
        />
        <p className="popup__notification">
          {props.onSuccessRegister
            ? "Вы успешно зарегистрировались!"
            : "Что-то пошло не так! Попробуйте еще раз."}
        </p>
      </div>
    </div>
  );
}

export default InfoToolTip;
