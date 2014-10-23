/*****************************************************************************/
/* ReviewMap Publish Functions
/*****************************************************************************/

Meteor.publish('review_map', function () {
	return Product.find({needsReview:{$ne:[]}},{fields:{name:1,needsReview:1}});
});