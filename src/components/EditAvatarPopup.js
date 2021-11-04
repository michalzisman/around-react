import React, { useState, useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const [avatar, setAvatar] = useState(props.avatar);
  const avatarLink = useRef();

  function handleChangeLike(e) {
    setAvatar(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateProfilePic({ avatar: avatarLink.current.value });
  }

  return (
    <PopupWithForm
      onClose={props.onClose}
      title="Change profile picture"
      name="edit-profilePic"
      buttonText="Save"
      isOpen={props.isOpen}
      onSubmit={handleSubmit}
    >
      <div className="form__input-wrapper">
        <input
          type="url"
          className="form__input form__input_field_link"
          id="link-profilePic"
          name="avatar"
          placeholder="Image link"
          required
          value={avatar}
          ref={avatarLink}
          onChange={handleChangeLike}
        />
        <span className="form__input-error link-profilePic-error"></span>
      </div>
    </PopupWithForm>
  );
}
export default EditAvatarPopup;
