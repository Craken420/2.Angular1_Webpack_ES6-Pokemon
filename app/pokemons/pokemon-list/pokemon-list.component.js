function pokemonListCtrl() {
  console.log('this::-------------------------------------------\n', this);
}

module.exports = {
  template: require('./pokemon-list.html'),
  controller: pokemonListCtrl,
  bindings: {
    pokemons: '='
  }
}
