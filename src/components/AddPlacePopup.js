import React, { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const name = useRef();
  const link = useRef();

  function handleNameChange(e) {
    name.current.value = e.target.value;
    // setName(e.target.value);
  }

  function handleLinkChange(e) {
    link.current.value = e.target.value;
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddNewPlace({
      name: name.current.value,
      link: link.current.value,
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
        onChange={handleNameChange}
        type="text"
        className="form__input form__input_field_title"
        id="title-input"
        name="name"
        ref={name}
        placeholder="Place name"
        minLength="1"
        maxLength="30"
        required
      />
      <span className="form__input-error title-input-error"></span>
      <input
        onChange={handleLinkChange}
        type="url"
        className="form__input form__input_field_link"
        id="link-input"
        name="link"
        ref={link}
        placeholder="Image link"
        required
      />
      <span className="form__input-error link-input-error"></span>
    </PopupWithForm>
  );
}
export default AddPlacePopup;
