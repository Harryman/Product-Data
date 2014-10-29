/*****************************************************************************/
/* Search: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Search.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Search.helpers({
  prodEntry: function (){
    return Product.find();
  },
  prodCount: function(){
    return Session.get('postCount');
  },
  reviewCount: function(){
    return Session.get('reviewCount')
  }
});

/*****************************************************************************/
/* Search: Lifecycle Hooks */
/*****************************************************************************/
Template.Search.created = function () {
  Meteor.call("getProdCount",function(err,result){
    Session.set('postCount', result)
    });
  Meteor.call("getReviewCount", function(err,result){
    Session.set('reviewCount', result);
  })
};

Template.Search.rendered = function () {
};

Template.Search.destroyed = function () {
};