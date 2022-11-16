import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const avatarRef = React.useRef();

  React.useEffect(() => {
    avatarRef.current.value = "";
  }, [props.isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="edit-avatar"
      title="Обновить аватар"
      buttonText={props.isLoading ? "Сохранение..." : "Сохранить"}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <section className="popup__form-section">
        <input
          className="popup__input"
          id="avatar-url"
          ref={avatarRef}
          type="url"
          name="avatar"
          placeholder="Ссылка на аватар"
          required
        />
        <span className="popup__input-error avatar-url-error"></span>
      </section>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
