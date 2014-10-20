/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound',
  waitOn: function (){
  	return Meteor.subscribe('crntUser')
  }
});

Router.plugin('authd',{
  notAuthed:'no.auth',
  except:'no.auth'
});

/*
 *  Example:
 *  Router.route('/', {name: 'home'});
*/
Router.route('/s/:search', {name: 'search'});
Router.route('/notAuthorized', {name: 'no.auth'});
Router.route('/:_id', {name: 'product'});
Router.route('/', {name: 'index'});
