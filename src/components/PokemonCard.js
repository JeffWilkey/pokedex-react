import React from "react";
import "./PokemonCard.scss";

const PokemonCard = props =>
  props.selectedCard ? (
    <div>
      <img
        className="card-img"
        src={props.selectedCard.imageUrlHiRes}
        alt={`${props.selectedCard.name} card`}
      />
      <div className="card-controls">
        <a href="#prev" onClick={() => props.handleIncrement(false)} style={props.currentIndex === 0 ? { pointerEvents: 'none' } : {}}>{"<"}</a>
        <span>Series: {props.selectedCard.series}</span>
        <a href="#next" onClick={() => props.handleIncrement(true)} style={props.isMaxLength ? { pointerEvents: 'none' } : {}}>{">"}</a>
      </div>
    </div>
    
  ) : null;

export default PokemonCard;
