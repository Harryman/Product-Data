/*Product = function(utilClct,options){
	this.utilClct = utilClct;
	this.options = options;
}
Product.prototype.pn({
	getAvailable: function(){
		var prod = utilClct.findOne({type:"product"});
		if(prod.pn){
			return prod.pn;
		}
		else{
			utilClct.update({
				_id:prod.id
			},{
				update:{pn:100}},{});
			return 100;
		}
	},
	increment: function (){
		utilClct.update({type:"product"},{$inc:{pn:1}})
	}
});*/