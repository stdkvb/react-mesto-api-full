import PopupWithForm from "./PopupWithForm";

function ConfirmationPopup(props) {
  return (
    <PopupWithForm
      name="delete"
      title="Вы уверены?"
      buttonText={props.isLoading ? "Удаление..." : "Да"}
      onClose={props.onClose}
    />
  );
}

export default ConfirmationPopup;
