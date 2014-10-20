NoAuthController = RouteController.extend({
  waitOn: function () {
  },

  data: function () {
  },

  action: function () {
    this.render();
    if(Meteor.user()){
      if(Meteor.user().services !== undefined){
        if(Meteor.user().services.google.email.match(/@midwestsupercub.net/g)){
          this.redirect('index');
        }
      }
    }
  }
});