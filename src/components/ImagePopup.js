function ImagePopup(props) {
  return (
    <div
      className={`popup popup_type_image-popup ${
        props.isOpen ? "popup_opened" : ""
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
        <div className="imageLarge">
          <img
            className="imageLarge__image"
            src={props.card.link}
            alt={props.card.name}
          />
          <p className="imageLarge__name"></p>
        </div>
      </div>
    </div>
    // <div className="popup popup_type_image-popup">
    //   <div className="popup__overlay"></div>
    //   <div className="popup__container">
    //     <button
    //       type="button"
    //       className="popup__closeBtn popup__closeBtn_theme_image"
    //       aria-label="Close"
    //       onClick={props.onClose}
    //     ></button>
    //     <div className="imageLarge">
    //       <img
    //         className="imageLarge__image"
    //         src="https://images.unsplash.com/photo-1635589843460-c2…3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    //         alt={props.card.name}
    //       />
    //       <p className="imageLarge__name"></p>
    //     </div>
    //   </div>
    // </div>
  );
}

export default ImagePopup;
