
Iron.Router.plugins.authd = function (router, options){
	router.onBeforeAction(function(){
		if(Meteor.loggingIn()){
			return;
		}
		else if(!Meteor.user()){
			this.redirect(this.lookupOption('notAuthed'));
		}
		else{
			if(undefined !== Meteor.user().services){
				if(Meteor.user().services.google.email.match(/@midwestsupercub.net/g)){
					this.next();
				}
				else{
					this.redirect(this.lookupOption('notAuthed'));
				}
			}
		}
	},options);
}

