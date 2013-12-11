var App = require('./app');

App.Router.map(function() {
	this.route('factures');
	this.route('facture', {path: "/facture/:facture_id"})
	this.route('client', {path: "/client/:client_id"});
});

