TagController = RouteController.extend({
  waitOn: function () {
  	return Meteor.subscribe('index',{relatedTags:this.params.tag})
  },

  data: function () {
  },

  action: function () {
    this.render();
  }
});