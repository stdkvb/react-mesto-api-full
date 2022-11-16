function ImagePopup(props) {
  
  const isOpen = () => !!props.card?.link;

  return (
    <div
      className={`popup popup_dark-background ${isOpen() && "popup_opened"}`}
      id="imagePopup"
    >
      <div className="popup__container popup__container_fullsize">
        <button
          className="popup__close-button"
          type="button"
          onClick={props.onClose}
        ></button>
        <img
          className="popup__image"
          src={`${isOpen() ? props.card.link : ""}`}
          alt={`фото места ${props.card.name}`}
        />
        <p className="popup__description">{props.card.name}</p>
      </div>
    </div>
  );
}

export default ImagePopup;
