Pokedex.RootView.prototype.renderPokemonDetail = function (pokemon) {
  var $detail = $("<div class=detail></div>")
  $detail.append("<img src=" + pokemon.get("image_url") + "></img>");
  $detail.append(pokemon.get('attack') + "  ");
  $detail.append(pokemon.get('defense') + "  ");
  $detail.append(pokemon.get('name') + "  ");
  $detail.append(pokemon.get('poke_type') + "  ");  
  this.$pokeDetail.append($detail);
};

Pokedex.RootView.prototype.selectPokemonFromList = function (event) {
  var id = $(event.target).data('id');
  return this.pokes.get(id);
};
