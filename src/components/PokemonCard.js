import React from "react";
import "./PokemonCard.scss";

const PokemonCard = props =>
  props.selectedCard ? (
    <img
      className="card-img"
      src={props.selectedCard.imageUrlHiRes}
      alt={`${props.selectedCard.name} card`}
    />
  ) : null;

export default PokemonCard;
