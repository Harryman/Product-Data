OldPartController = RouteController.extend({
  waitOn: function () {
  	return Meteor.subscribe('index',{oldPart:this.params.oldPart})
  },

  data: function () {
  },

  action: function () {
    this.render();
  }
});