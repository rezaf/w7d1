Pokedex.RootView.prototype.createPokemon = function (attrs, callback) {
  var that = this;
  var newPoke = new Pokedex.Models.Pokemon(attrs);
  newPoke.save(attrs, {
    success: function() {
      that.pokes.push(newPoke);
      that.addPokemonToList(newPoke);
      callback(newPoke);
    }
  });
  
};

Pokedex.RootView.prototype.submitPokemonForm = function (event) {
  var JStarget = $(event.target).serializeJSON();
  this.createPokemon(JStarget, this.renderPokemonDetail.bind(this));
};
