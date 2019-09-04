import React, { Component } from 'react';
import pokemon from 'pokemontcgsdk';
import options from '../utils/pokemonOptions';
import Search from './Search';
import PokemonCard from './PokemonCard';
import PokemonCardInfo from './PokemonCardInfo';
import './Pokedex.scss';

class Pokedex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
      cards: [],
      startIndex: Math.floor(Math.random() * Math.floor(options.length))
    };
  }

  componentDidMount = () => {
    this.handleChange(options[this.state.startIndex]);
  };

  handleChange = e => {
    if (this.state.selected !== e.value) {
      pokemon.card.where({ name: e.value, series: "Base" }).then(cards => {
        cards = cards.filter(card => card.name === e.label);
        console.log(cards);
        this.setState({
          selected: e.value,
          cards
        });
      });
    }
  };

  render() {
    const { cards } = this.state;
    return (
      <div className="Pokedex">
        <img className="logo bounce" src="pokeball.png" alt="pokeball" />
        <h1>Pokedex</h1>
        <div className="card">
          <h2 className="card-search-header">Search</h2>
          <Search
            onChange={this.handleChange}
            defaultValue={options[this.state.startIndex]}
          />
          <div className="card-row">
            <div className="card-col-1">
              <h2>Card(s)</h2>
              <div className="card-container">
                <PokemonCard selectedCard={cards[0]} />
              </div>
            </div>
            <div className="card-col-1">
              <PokemonCardInfo selectedCard={cards[0]} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pokedex;