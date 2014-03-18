var FacturesController = Ember.ArrayController.extend({

	sortAscending: false,
	sortPorperties: ['date'],


	actions: {
		pushSort: function(attribute) {
			if (this.get('sortProperties.firstObject') === attribute) {
				this.toggleProperty('sortAscending');
			} else {
				this.set('sortProperties', [ attribute ]);
				this.set('sortAscending', true);
			}
		},
		
	},

	factureNumber: function() {
		//Get the number of payed factures
		var payedFactures = this.filter(function(facture) {
			return facture.get('payed') === true;
		});
		var payed = payedFactures.get('length');

		//Get the number of unpaid factures
		var notPayedFactures = this.filter(function(facture) {
			return facture.get('payed') === false;
		});
		var notPayed = notPayedFactures.get('length');

		//Calculate the percentage of payed factures
		var total = payed + notPayed;
		var totalPercent = (payed / total) * 100;

		//Return the D3 array
		return [[0, totalPercent, "rgba(118, 180, 31, 0.7)", "payées"],[totalPercent, 100, "rgba(93, 31, 180, 0.7)", "impayées"]];
	}.property('@each.payed'),
		
	totalWaitingSum: function() {

		var totalpayed = 0;
		var total = 0;

		var payedFactures = this.filter(function(facture) {
			return facture.get('payed') === true;
		});

		var unpayedFactures = this.filter(function(facture) {
			return facture.get('payed') === false;
		})

		payedFactures.forEach(function(item) {
			totalpayed += item.get('amount');
		});
		unpayedFactures.forEach(function(item) {
			total += item.get('amount');
		});

		var total = total + totalpayed;
		console.log(totalpayed);
		console.log(total);
		var totalPercent = (totalpayed / total) * 100

		return [[0, totalPercent, "rgba(31, 119, 180, 0.9)"],[totalPercent, 100, "rgba(214, 39, 40, 0.9)"]];
	}.property('@each.{payed,amount}'),

	sommePrevisionnelle: function() {
		return [[0, 73, "rgba(255, 127, 14, 0.7)"],[73, 100, "rgba(14, 142, 254, 0.7)"]];
	}
});

module.exports = FacturesController;

