import React from "react";

function Tour({ tour, removeTour }) {
  const { id, info, image, name, price } = tour;
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h3>{name}</h3>
          <h3 className="tour-price">${price}</h3>
        </div>
        <p>{info}</p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          Not interested
        </button>
      </footer>
    </article>
  );
}

export default Tour;
