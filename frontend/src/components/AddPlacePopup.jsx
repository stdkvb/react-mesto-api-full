import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [name, setName] = React.useState("");
  function handleChangeName(e) {
    setName(e.target.value);
  }

  const [link, setLink] = React.useState("");
  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  function handleAddPlaceSubmit(e) {
    e.preventDefault();
    props.onAddCard({ name, link });
  }

  React.useEffect(() => {
    setName("");
    setLink("");
  }, [props.isOpen]);

  return (
    <PopupWithForm
      name="add-place"
      title="Новое место"
      buttonText={props.isLoading ? "Создание..." : "Создать"}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleAddPlaceSubmit}
    >
      <section className="popup__form-section">
        <input
          className="popup__input"
          id="place-name"
          onChange={handleChangeName}
          value={name || ""}
          type="text"
          name="name"
          placeholder="Название"
          required
          minLength="2"
          maxLength="30"
        />
        <span className="popup__input-error place-name-error"></span>
      </section>
      <section className="popup__form-section">
        <input
          className="popup__input"
          id="place-url"
          onChange={handleChangeLink}
          value={link || ""}
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__input-error place-url-error"></span>
      </section>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
