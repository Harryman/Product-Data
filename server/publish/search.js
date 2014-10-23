/*****************************************************************************/
/* Search Publish Functions
/*****************************************************************************/
Meteor.publish('search',function (searchString) {
	return Product.find({$text:{$search:searchString}});
});