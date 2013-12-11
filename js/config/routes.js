var App = require('./app');

App.Router.map(function() {
	this.route("factures");
	this.route("client", {path: "/client/:client_id"});
});

