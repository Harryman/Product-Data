SearchController = RouteController.extend({
  waitOn: function () {
  	return Meteor.subscribe('search',this.params.search)
  },

  data: function () {
  },

  action: function () {
    this.render();
  }
});