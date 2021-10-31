import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState();

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard();
  }

  return (
    <div className="App">
      <Header />
      <Main
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onEditAvatarClick={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <PopupWithForm
        onClose={closeAllPopups}
        title="New place"
        name="add-place"
        buttonText="Create"
        isOpen={isAddPlacePopupOpen}
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
      </PopupWithForm>

      <PopupWithForm
        onClose={closeAllPopups}
        title="Edit profile"
        name="edit-profile"
        buttonText="Save"
        isOpen={isEditProfilePopupOpen}
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
      </PopupWithForm>

      <PopupWithForm
        onClose={closeAllPopups}
        title="Change profile picture"
        name="edit-profilePic"
        buttonText="Save"
        isOpen={isEditAvatarPopupOpen}
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
      </PopupWithForm>

      <ImagePopup
        card={selectedCard}
        name="image-popup"
        onClose={closeAllPopups}
      />
      <Footer />
    </div>
  );
}

export default App;
