/*****************************************************************************/
/* MasterLayout: Event Handlers and Helpers */
/*****************************************************************************/
Template.MasterLayout.events({
 'click [name=Search]':function(e,template){
    e.preventDefault();
    var search = $(template.find('[name=searchForm]')).val();
    Router.go('/s/'+search);
  },
  'click [name=new]':function(e,template){
    e.preventDefault();
    var a = Product.insert({pn:99});
     a = '/'+a;
    Router.go(a);
  }
});

Template.MasterLayout.helpers({

  /*
   * Example: 
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* MasterLayout: Lifecycle Hooks */
/*****************************************************************************/
Template.MasterLayout.created = function () {
  //console.log([name=tags].value());
};

Template.MasterLayout.rendered = function () {
};

Template.MasterLayout.destroyed = function () {
};
