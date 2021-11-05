import React, { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {
    setName("");
    setLink("");
  }, [props.isOpen]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddNewPlace({
      name,
      link,
    });
  }

  return (
    <PopupWithForm
      onClose={props.onClose}
      title="New place"
      name="add-place"
      buttonText="Create"
      isOpen={props.isOpen}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="form__input form__input_field_title"
        id="title-input"
        name="name"
        value={name}
        onChange={handleChangeName}
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
        value={link}
        onChange={handleChangeLink}
        placeholder="Image link"
        required
      />
      <span className="form__input-error link-input-error"></span>
    </PopupWithForm>
  );
}
export default AddPlacePopup;
