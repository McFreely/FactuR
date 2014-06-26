var Facture = DS.Model.extend({
	ref: DS.attr("number"),
	amount: DS.attr("number"),
	name: DS.attr("string"),
	payed: DS.attr("boolean"),
	date: DS.attr("date"),
	archived: DS.attr('boolean'),
	client: DS.belongsTo('Client')
});

Facture.FIXTURES = [{
	id: 1,
	ref: 293945,
	amount: 650,
	name: "Cols Roulés Tactiques",
	payed: false,
	archived: false,
	date: new Date(2013,10,23),
	client: 1
},{
	id: 2,
	ref: 293322,
	amount: 1250,
	name: "Litière pour Ocelot",
	payed: false,
	archived: false,
	date: new Date(2013,3,13),
	client: 1
},{
	id: 3,
	ref: 302934,
	amount: 349,
	name: 'Carosserie Aston Martin',
	payed: true,
	archived: false,
	date: new Date(2012,5,3),
	client: 2
},
{
	id: 4,
	ref: 293975,
	amount: 50,
	name: "Tabac à pipe",
	payed: true,
	archived: false,
	date: new Date(2014,01,23),
	client: 3
},{
	id: 5,
	ref: 290967,
	amount: 1750,
	name: "Appareil photo",
	payed: false,
	archived: false,
	date: new Date(2013,3,14),
	client: 4
},{
	id: 6,
	ref: 301026,
	amount: 250,
	name: 'Oreille',
	payed: true,
	archived: false,
	date: new Date(2014,2,3),
	client: 4
},
{
	id: 7,
	ref: 293476,
	amount: 20,
	name: "Carnet de reporter",
	payed: false,
	archived: false,
	date: new Date(2013,11,23),
	client: 4
},{
	id: 8,
	ref: 293560,
	amount: 3050,
	name: "Parrebrise batmobile",
	payed: true,
	archived: false,
	date: new Date(2011,4,25),
	client: 5
},{
	id: 9,
	ref: 306253,
	amount: 150,
	name: 'Grapin',
	payed: true,
	archived: false,
	date: new Date(2012,6,4),
	client: 5
},{
	id: 10,
	ref: 303875,
	amount: 1000,
	name: 'Whiskey',
	payed: true,
	archived: false,
	date: new Date(2011,6,4),
	client: 6
},{
	id: 11,
	ref: 303975,
	amount: 550,
	name: 'Thorium',
	payed: false,
	archived: false,
	date: new Date(2014,3,4),
	client: 6
},{
	id: 12,
	ref: 302938,
	amount: 150,
	name: 'Lunettes',
	payed: true,
	archived: false,
	date: new Date(2012,7,4),
	client: 6
}]

module.exports = Facture;

