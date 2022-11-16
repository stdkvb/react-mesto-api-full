import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
  const [name, setName] = React.useState("");
  function handleNameChange(e) {
    setName(e.target.value);
  }

  const [description, setDescription] = React.useState("");
  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  const currentUser = React.useContext(CurrentUserContext);
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="edit-profile"
      title="Редактировать профиль"
      buttonText={props.isLoading ? "Сохранение..." : "Сохранить"}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <section className="popup__form-section">
        <input
          className="popup__input profile-name"
          id="profile-name"
          value={name || ""}
          onChange={handleNameChange}
          type="text"
          name="name"
          placeholder="Имя"
          required
          minLength="2"
          maxLength="40"
        />
        <span className="popup__input-error profile-name-error"></span>
      </section>
      <section className="popup__form-section">
        <input
          className="popup__input profile-job"
          id="profile-job"
          value={description || ""}
          onChange={handleDescriptionChange}
          type="text"
          name="about"
          placeholder="О себе"
          required
          minLength="2"
          maxLength="200"
        />
        <span className="popup__input-error profile-job-error"></span>
      </section>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
