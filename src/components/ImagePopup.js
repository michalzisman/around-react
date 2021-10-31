function ImagePopup(props) {
  return (
    <div
      className={`popup popup_type_image-popup ${
        props.card ? "popup_opened" : ""
      }`}
    >
      <div className="popup__overlay"></div>
      <div className="popup__container">
        <button
          type="button"
          className="popup__closeBtn popup__closeBtn_theme_image"
          aria-label="Close"
          onClick={props.onClose}
        ></button>
        {props.card && (
          <div className="imageLarge">
            <img
              className="imageLarge__image"
              src={props.card.link}
              alt={props.card.name}
            />
            <p className="imageLarge__name">{props.card.name}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ImagePopup;
