var FacturesRoute = Ember.Route.extend({
  model: function(){
    return this.store.findAll("facture");
  }
});

module.exports = FacturesRoute;

