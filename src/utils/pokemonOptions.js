import pokemon from 'pokemon';

export default pokemon.all().map(p => ({
  value: p.toLowerCase(),
  label: p
}));