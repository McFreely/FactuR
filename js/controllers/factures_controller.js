var FacturesController = Ember.ArrayController.extend({
	waitingFacturesCount: function() {
		var waitingFactures = this.filter(function(facture) {
			return facture.get('payed') === false;
		});
		return waitingFactures.get('length');
	}.property('@each.payed')
});

module.exports = FacturesController;

