var Client = DS.Model.extend({
	name: DS.attr('string'),
	address: DS.attr('string'),
	email: DS.attr('string'),
	telephone: DS.attr("string"),
	facture: DS.hasMany('Facture') 
});

Client.FIXTURES = [{
	id: 1,
	name: "Sterling Archer",
	address: "45 rue des templiers, 76600 Le Havre",
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
},{
	id: 3,
	name:"Sherlock Holmes",
	address: "221b Baker street",
	email: "sholmes@s-yard.co.uk",
	telephone: "555-3049",
	facture: [4]
},{
	id: 4,
	name:"Tintin",
	address: "26 rue du labrador",
	email: "tintin@gmail.com",
	telephone: "0403948482",
	facture: [5,6,7]
},{
	id: 5,
	name:"Bruce Wayne",
	address: "Gotham City",
	email: "BruceWayne@w-enterprise.com",
	telephone: "555-2039",
	facture: [8,9]
},
{
	id: 6,
	name:"Tony Stark",
	address: "New York",
	email: "TonyStark@s-enterprise.com",
	telephone: "555-2034",
	facture: [10,11,12]
}
]

module.exports = Client;

