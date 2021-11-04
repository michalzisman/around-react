function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_type_${props.name} ${
        props.isOpen ? "popup_opened" : ""
      }`}
    >
      <div className="popup__overlay"></div>
      <div className="popup__container">
        <button
          type="button"
          className={`popup__closeBtn popup__closeBtn_${props.name}`}
          aria-label="Close"
          onClick={props.onClose}
        ></button>
        <form
          className={`form form_type_${props.name}`}
          name={`${props.name}`}
          onSubmit={props.onSubmit}
        >
          <h2 className="form__heading">{props.title}</h2>
          <fieldset className="form__fieldset">
            {props.children}{" "}
            <button type="submit" className="form__submit">
              {props.buttonText}
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
