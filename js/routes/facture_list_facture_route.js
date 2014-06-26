var ClientFactureRoute = Ember.Route.extend({
	model: function(params) {
		return this.store.find('facture', params.facture_id)
	}
});

module.exports = ClientFactureRoute;

