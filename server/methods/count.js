/*****************************************************************************/
/* Count Methods */
/*****************************************************************************/

Meteor.methods({
	getProdCount: function (){
		return Product.find().count();
	},
	getReviewCount: function (){
		return Product.find({$or:[{needsReview:""},{needsReview:{$exists:false}}]}).count();
	}
});