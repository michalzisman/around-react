import React, { useState, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [about, setAbout] = useState(currentUser.about);

  useEffect(() => {
    setName(currentUser.name);
    setAbout(currentUser.about);
  }, [currentUser, props.isOpen]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleAboutChange(e) {
    setAbout(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name,
      about,
    });
  }

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      title="Edit profile"
      name="edit-profile"
      buttonText="Save"
      onSubmit={handleSubmit}
    >
      <div className="form__input-wrapper"></div>
      <input
        type="text"
        className="form__input form__input_field_name"
        id="name-input"
        name="name"
        placeholder="Name"
        value={name}
        onChange={handleNameChange}
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
        value={about}
        onChange={handleAboutChange}
        placeholder="About"
        minLength="2"
        maxLength="200"
        required
      />
      <span className="form__input-error about-input-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
