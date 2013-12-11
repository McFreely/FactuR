Ember.Handlebars.helper('attenteReglement', function(payed) {
	if (payed === true) {
		return new Handlebars.SafeString('<button class="custom-width tiny success disabled">Réglée</button>');
	} else {
		return new Handlebars.SafeString('<button class="custom-width tiny alert disabled">En attente</button>');
	}
});

