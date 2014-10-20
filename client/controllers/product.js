ProductController = RouteController.extend({
  waitOn: function () {
  	return Meteor.subscribe('prod',this.params._id);
  },

  data: function () {
  	return Product.findOne({_id:this.params._id})
  },

  action: function () {
    this.render();
  }
});