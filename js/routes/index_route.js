var IndexRoute = Ember.Route.extend({
	beforeModel: function() {
		this.transitionTo('factures');
	}
});

module.exports = IndexRoute;

