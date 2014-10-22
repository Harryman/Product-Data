OldPartController = RouteController.extend({
  waitOn: function () {
  	return Meteor.subscribe('index',{oldPart:{$regex:this.params.oldPart,$options:'i'}})
  },

  data: function () {
  },

  action: function () {
    this.render();
  }
});