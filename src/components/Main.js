import React, { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import Card from "./Card";
import ImagePopup from "./ImagePopup";
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
                onCardClick={props.onCardClick}
              />
            );
          })}
        </section>

        {props.isAddPlacePopupOpen && (
          <PopupWithForm
            onClose={props.onClose}
            title="New place"
            name="add-place"
            isOpen="isOpen"
          >
            <input
              type="text"
              className="form__input form__input_field_title"
              id="title-input"
              name="name"
              placeholder="Place name"
              minLength="1"
              maxLength="30"
              required
            />
            <span className="form__input-error title-input-error"></span>
            <input
              type="url"
              className="form__input form__input_field_link"
              id="link-input"
              name="link"
              placeholder="Image link"
              required
            />
            <span className="form__input-error link-input-error"></span>
            <button type="submit" className="form__submit" disabled>
              Create
            </button>
          </PopupWithForm>
        )}

        {props.isEditProfilePopupOpen && (
          <PopupWithForm
            onClose={props.onClose}
            title="Edit profile"
            name="edit-profile"
            isOpen="isOpen"
            selector={props.isEditProfilePopupOpen}
          >
            <div className="form__input-wrapper"></div>
            <input
              type="text"
              className="form__input form__input_field_name"
              id="name-input"
              name="name"
              placeholder="Name"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="form__input-error name-input-error"></span>
            <input
              type="text"
              className="form__input form__input_field_description"
              id="about-input"
              name="about"
              placeholder="About"
              minLength="2"
              maxLength="200"
              required
            />
            <span className="form__input-error about-input-error"></span>
            <button
              type="submit"
              className="form__submit form__submit-edit"
              disabled
            >
              Save
            </button>
          </PopupWithForm>
        )}

        {props.isEditAvatarPopupOpen && (
          <PopupWithForm
            onClose={props.onClose}
            title="Change profile picture"
            name="edit-profilePic"
            isOpen="isOpen"
            selector={props.isEditAvatarPopupOpen}
          >
            <div className="form__input-wrapper">
              <input
                type="url"
                className="form__input form__input_field_link"
                id="link-profilePic"
                name="avatar"
                placeholder="Image link"
                required
              />
              <span className="form__input-error link-profilePic-error"></span>
            </div>
            <button
              type="submit"
              className="form__submit form__submit-edit"
              disabled
            >
              Save
            </button>
          </PopupWithForm>
        )}

        {props.card && (
          <ImagePopup
            card={props.card}
            onClose={props.onClose}
            isOpen="isOpen"
          />
        )}

        {/* 
        <PopupWithForm title="Are you sure?" name="delete-card">
          <button type="submit" className="form__submit form__submit-delete">
            Yes
          </button>
        </PopupWithForm>

        <ImagePopup                 selectedCard={props.selectedCard}
 /> */}
      </main>
    </>
  );
}

export default Main;
