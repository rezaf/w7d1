Pokedex.RootView.prototype.addPokemonToList = function (pokemon) {
  var $list = $('<li></li>');
  $list.data("id", pokemon.get('id'));
  $list.append(pokemon.get('name'));
  $list.append(" (" + pokemon.get('poke_type') + ")");
  $list.addClass("poke-list-item");
  this.$pokeList.append($list);
};

Pokedex.RootView.prototype.refreshPokemon = function (addPokemonToList) {
  var that = this;
  this.pokes.fetch({
    success: function() {
      that.pokes.forEach(function(pokemon){
        that.addPokemonToList(pokemon);
      });
    }
  });
};
