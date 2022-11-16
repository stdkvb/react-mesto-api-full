function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_type_${props.name} ${props.isOpen && "popup_opened"}`}
      id={props.name}
    >
      <div className="popup__container">
        <button
          className="popup__close-button"
          type="button"
          onClick={props.onClose}
        ></button>
        <form
          className="popup__form"
          name={props.name}
          onSubmit={props.onSubmit}
        >
          <h3 className="popup__title">{props.title}</h3>
          {props.children}
          <button className="popup__submit-button" type="submit">
            {props.buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
