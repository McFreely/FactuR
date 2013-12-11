var Client = DS.Model.extend({
	name: DS.attr('string'),
	address: DS.attr('string'),
	email: DS.attr('string'),
	telephone: DS.attr("string"),
	facture: DS.belongsTo('facture') 
});

module.exports = Client;

