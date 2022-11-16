import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;
  const isLiked = props.card.likes.some((like) => like._id === currentUser._id);

  const handleClick = () => {
    props.onCardClick(props.card);
  };

  const handleLikeClick = () => {
    props.onCardLike(props.card);
  };

  const handleDeleteClick = () => {
    props.onCardDelete(props.card);
  };

  return (
    <li className="card">
      <img
        className="card__img"
        src={props.card.link}
        alt={`фотография места ${props.card.name}`}
        onClick={handleClick}
      />
      <h2 className="card__title">{props.card.name}</h2>
      <div className="card__like-section">
        <button
          className={`card__like-button ${isLiked && "card__like-button_active"}`}
          type="button"
          onClick={handleLikeClick}
        ></button>
        <p className="card__like-counter">{props.card.likes.length}</p>
      </div>
      <button
        className={`card__delete-button ${!isOwn && "card__delete-button_disable"}`}
        type="button"
        onClick={handleDeleteClick}
      ></button>
    </li>
  );
}

export default Card;
