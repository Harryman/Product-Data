/*****************************************************************************/
/* Prod Publish Functions
/*****************************************************************************/

Meteor.publish('prod', function (id) {
	if(Meteor.users.findOne({_id:this.userId}).services.google.email.match(/@midwestsupercub.net/g)){
		return Product.find({_id:id});
	}
	else{
		return false;
	}
});