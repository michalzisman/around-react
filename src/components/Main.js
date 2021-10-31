import React, { useState, useEffect } from "react";
// import PopupWithForm from "./PopupWithForm";
import Card from "./Card";
// import ImagePopup from "./ImagePopup";
import { api } from "../utils/api";

function Main(props) {
  const [userName, setUserName] = useState("User Name");
  const [userDescription, setUserDescription] = useState("Description");
  const [userAvatar, setUserAvatar] = useState();
  const [cards, setCard] = useState([]);

  useEffect(() => {
    Promise.all([api.getInitialCards(), api.getUserInfo()])
      .then(([cardData, userData]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCard(cardData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <main className="content">
        <section className="profile">
          <div className="profile__data">
            <div
              className="profile__avatar"
              onClick={props.onEditAvatarClick}
              style={{ backgroundImage: `url(${userAvatar})` }}
            >
              <div className="profile__avatar-overlay">
                <div className="profile__avatar-edit"></div>
              </div>
            </div>
            <div className="profile__info">
              <div className="profile__info-top">
                <h1 className="profile__name">{userName}</h1>
                <button
                  type="button"
                  className="profile__edit"
                  aria-label="Edit"
                  onClick={props.onEditProfileClick}
                ></button>
              </div>
              <p className="profile__description">{userDescription}</p>
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
          {cards.map((card) => {
            return (
              <Card
                key={card._id}
                link={card.link}
                name={card.name}
                likes={card.likes.length}
                onCardClick={props.onCardClick}
              />
            );
          })}
        </section>
      </main>
    </>
  );
}

export default Main;
