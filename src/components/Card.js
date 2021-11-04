import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
  const { _id } = React.useContext(CurrentUserContext);

  const isOwner = props.ownerId === _id;
  const cardDeleteButtonClassName = `card__delete ${
    isOwner ? "card__delete_visible" : ""
  }`;

  const isLiked = props.likes.some((i) => i._id === _id);
  const cardLikeButtonClassName = `card__like ${
    isLiked ? "card__like_active" : ""
  }`;

  function handleClick() {
    props.onCardClick(props);
  }

  function handleLikeClick(event) {
    props.onCardLike(event, props.cardId);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.cardId);
  }

  return (
    <div className="card">
      <button
        type="button"
        className={cardDeleteButtonClassName}
        aria-label="Delete card"
        onClick={handleDeleteClick}
      ></button>
      <img
        className="card__image"
        src={props.link}
        alt={props.name}
        onClick={handleClick}
      />
      <div className="card__info">
        <h2 className="card__title">{props.name}</h2>
        <div className="card_likesWrapper">
          <button
            onClick={handleLikeClick}
            type="button"
            className={cardLikeButtonClassName}
            aria-label="Like"
          ></button>
          <p className="card__likesNumber">{props.likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
