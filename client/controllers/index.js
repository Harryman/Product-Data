IndexController = RouteController.extend({
  waitOn: function () {
  	return Meteor.subscribe('index',{});
  	return Meteor.subscribe('count');
  },

  data: function () {
  },

  action: function () {
    this.render();
  }
});