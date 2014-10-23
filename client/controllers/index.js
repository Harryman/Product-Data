IndexController = RouteController.extend({
  waitOn: function () {
  	return Meteor.subscribe('index',{});
  },

  data: function () {
  },

  action: function () {
    this.render();
  }
});