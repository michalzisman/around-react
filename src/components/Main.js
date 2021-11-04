import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Card from "./Card";

function Main(props) {
  const { name, about, avatar } = React.useContext(CurrentUserContext);

  function handleCardLike(event, cardId) {
    props.onCardLike(event, cardId);
  }

  return (
    <>
      <main className="content">
        <section className="profile">
          <div className="profile__data">
            <div
              className="profile__avatar"
              onClick={props.onEditAvatarClick}
              style={{ backgroundImage: `url(${avatar})` }}
            >
              <div className="profile__avatar-overlay">
                <div className="profile__avatar-edit"></div>
              </div>
            </div>
            <div className="profile__info">
              <div className="profile__info-top">
                <h1 className="profile__name">{name}</h1>
                <button
                  type="button"
                  className="profile__edit"
                  aria-label="Edit"
                  onClick={props.onEditProfileClick}
                ></button>
              </div>
              <p className="profile__description">{about}</p>
            </div>
          </div>
          <button
            type="button"
            className="profile__add-button"
            aria-label="Add"
            onClick={props.onAddPlaceClick}
          ></button>
        </section>

        <section className="cards">
          {props.cards.map((card) => {
            return (
              <Card
                onCardLike={handleCardLike}
                onCardDelete={props.onCardDelete}
                onCardClick={props.onCardClick}
                key={card._id}
                link={card.link}
                name={card.name}
                likes={card.likes}
                ownerId={card.owner._id}
                cardId={card._id}
              />
            );
          })}
        </section>
      </main>
    </>
  );
}

export default Main;
