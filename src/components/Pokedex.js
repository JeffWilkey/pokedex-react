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
      startIndex: Math.floor(Math.random() * Math.floor(options.length)),
      selectedCardIndex: 0
    };
  }

  componentDidMount = () => {
    this.handleChange(options[this.state.startIndex]);
  };

  handleChange = e => {
    if (this.state.selected !== e.value) {
      pokemon.card.where({ name: e.value }).then(cards => {
        cards = cards.filter(card => card.name === e.label);
        console.log(cards);
        this.setState({
          selected: e.value,
          cards
        });
      });
    }
  };

  handleCardIndexIncrement = (isIncrement) => {
    if (isIncrement) {
      this.setState({
        selectedCardIndex: this.state.selectedCardIndex + 1
      });
    } else {
      this.setState({
        selectedCardIndex: this.state.selectedCardIndex - 1
      });
    }
  }

  render() {
    const { cards, selectedCardIndex } = this.state;
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
                <PokemonCard
                  selectedCard={cards[selectedCardIndex]}
                  handleIncrement={this.handleCardIndexIncrement}
                  currentIndex={this.state.selectedCardIndex}
                  isMaxLength={this.state.cards.length - 1 === selectedCardIndex}
                />
              </div>
            </div>
            <div className="card-col-1">
              <PokemonCardInfo selectedCard={cards[selectedCardIndex]} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pokedex;