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
Router.route('/s/:search', {
	name: 'search',
	template: 'Index'
});
Router.route('/notAuthorized', {name: 'no.auth'});
Router.route('/t/:tag', {
	name: 'tag',
	template: 'Index'
});
Router.route('/op/:oldPart', {
	name: 'old.part',
	template: 'Index'
});
Router.route('/reviewNeeded', {name: 'needs.review'});
Router.route('/', {name: 'index'});
Router.route('/:_id', {name: 'product'});
