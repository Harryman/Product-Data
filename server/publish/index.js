/*****************************************************************************/
/* Index Publish Functions
/*****************************************************************************/

Meteor.publish('index', function (match) {
	return Product.find(match,{fields:{name:1,oldPart:1,relatedTags:1,modified:1}});
});


