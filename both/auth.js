authChk = function (){
	if(Meteor.userId()){
		if(Meteor.users.findOne({_id:Meteor.userId()}).services !== undefined){
			if(Meteor.users.findOne({_id:Meteor.userId()}).services.google.email.match(/@midwestsupercub.net/g)){
				return true;
			}
		}
	}
	return false;
}