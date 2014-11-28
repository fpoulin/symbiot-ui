Symbiot.Router.map(function() {
  this.resource('symbiot', { path: '/' });
});

Symbiot.SymbiotRoute = Ember.Route.extend({
  renderTemplate: function() {
    this.render('symbiot');
    this.render('home', {
      into: 'symbiot'
    });
  }
});