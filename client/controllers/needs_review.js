NeedsReviewController = RouteController.extend({
  waitOn: function () {
  	return Meteor.subscribe('review_map');
  },

  data: function () {
  },

  action: function () {
    this.render();
  }
});