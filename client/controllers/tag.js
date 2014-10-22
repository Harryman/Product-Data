TagController = RouteController.extend({
  waitOn: function () {
  	return Meteor.subscribe('index',{tags:this.params.tag})
  },

  data: function () {
  },

  action: function () {
    this.render();
  }
});