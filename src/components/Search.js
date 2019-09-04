import React from "react";
import Select from "react-select";
import options from "../utils/pokemonOptions";

const Search = props => (
  <Select
    defaultValue={props.defaultValue}
    options={options}
    placeholder="Search Pokemon"
    onChange={props.onChange}
  />
);

export default Search;
