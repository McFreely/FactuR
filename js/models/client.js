var Client = DS.Model.extend({
	name: DS.attr('string'),
	address: DS.attr('string'),
	email: DS.attr('string'),
	telephone: DS.attr("string"),
	facture: DS.hasMany('App.Facture') 
});

Client.FIXTURES = [{
	id: 1,
	name: "Sterling Archer",
	address: "45 rue des templiers",
	email: "s.archer@isis.com",
	telephone: "555-7695",
	facture: [1,2] 
},{
	id: 2,
	name:"James bond",
	address: "10 downing street",
	email: "j.bond@mi6.com",
	telephone: "555-2938",
	facture: [3]
}]

module.exports = Client;

