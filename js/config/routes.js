var App = require('./app');

App.Router.map(function() {
	this.route('factures');
	this.route('facture', {path: "/facture/:facture_id"});
	this.route('facture.new', {path: "/facture/new"});
	this.route('client', {path: "/client/:client_id"});
	this.route('client.new', {path: '/client/new'});
	this.route('archives');
});

