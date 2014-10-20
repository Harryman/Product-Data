/*****************************************************************************/
/* Index Publish Functions
/*****************************************************************************/

Meteor.publish('index', function () {
	return Product.find({},{name:1,oldPart:1,tags:1,modified:1});
});
Meteor.publish('count', function (){
	return Product.count();
});

