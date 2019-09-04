import React from "react";
import { getTypeColor } from '../utils/helpers';
import "./PokemonCardInfo.scss";

const PokemonCardInfo = props =>
  props.selectedCard ? (
    <section className="card-info">
      <div
        className="card-info-field"
        style={{ justifyContent: "space-between" }}
      >
        <h2>
          {props.selectedCard.name}{" "}
          <span>
            {props.selectedCard.supertype} {props.selectedCard.subtype}
          </span>
        </h2>
        <p id="hp">
          <span>HP:</span> {props.selectedCard.hp}{" "}
        </p>
      </div>

      {props.selectedCard.evolvesFrom ? (
        <div className="card-info-field small">
          <label>Evolves From: </label>
          <p>{props.selectedCard.evolvesFrom}</p>
        </div>
      ) : null}

      <div className="card-info-field small">
        <label>Type: </label>
        <p style={{ color: getTypeColor(props.selectedCard.types[0]) }}>
          {props.selectedCard.types[0]}
        </p>
      </div>

      <div id="attacks" className="card-info-field nomax">
        {props.selectedCard.attacks.map(atk => {
          return (
            <div key={atk.name} className="attack">
              <div className="attack-col">
                <label>{atk.name}:</label>
                <p>{atk.text}</p>
                <p>
                  Cost:{" "}
                  <span style={{ color: getTypeColor(atk.cost[0]) }}>
                    {atk.cost.length} {atk.cost[0]}
                  </span>
                </p>
              </div>
              <h3>{atk.damage}</h3>
            </div>
          );
        })}
      </div>
      <div id="costs">
        <div className="costs-column">
          <h4>Weakness</h4>
          {props.selectedCard.weaknesses ? (
            props.selectedCard.weaknesses.map((wk, idx) => {
              return (
                <div key={`weakness-${idx}`}>
                  <p>
                    <span style={{ color: getTypeColor(wk.type) }}>
                      {wk.type}
                    </span>{" "}
                    {wk.value}
                  </p>
                </div>
              );
            })
          ) : (
            <p>None</p>
          )}
        </div>
        <div className="costs-column">
          <h4>Resistances</h4>
          {props.selectedCard.resistances ? (
            props.selectedCard.resistances.map((res, idx) => {
              return (
                <div key={`resistance-${idx}`}>
                  <p>
                    <span style={{ color: getTypeColor(res.type) }}>
                      {res.type}
                    </span>{" "}
                    {res.value}
                  </p>
                </div>
              );
            })
          ) : (
            <p>None</p>
          )}
        </div>
        <div className="costs-column">
          <h4>Retreat Costs</h4>
          {props.selectedCard.retreatCost ? (
            <p>{props.selectedCard.retreatCost.length}</p>
          ) : (
            <p>None</p>
          )}
        </div>
      </div>
    </section>
  ) : (
    <div />
  );

export default PokemonCardInfo;
