var FacturesRoute = Ember.Route.extend({
	model: function() {
		return App.Facture.find();
	}
});

module.exports = FacturesRoute;

