var Facture = DS.Model.extend({
	ref: DS.attr("number"),
	montant: DS.attr("number"),
	name: DS.attr("string"),
	payed: DS.attr("boolean"),
	date: DS.attr("date"),
	client: DS.belongsTo('client')
});

module.exports = Facture;

