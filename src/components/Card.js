function Card(props) {
  function handleClick() {
    props.onCardClick(props);
  }

  return (
    <div className="card">
      <button
        type="button"
        className="card__delete"
        aria-label="Delete card"
      ></button>
      <img
        className="card__image"
        src={props.link}
        alt={props.name}
        onClick={handleClick}
      />
      <div className="card__info">
        <h2 className="card__title">N/A</h2>
        <div className="card_likesWrapper">
          <button
            type="button"
            className="card__like"
            aria-label="Like"
          ></button>
          <p className="card__likesNumber"></p>
        </div>
      </div>
    </div>
  );
}

export default Card;
