/*****************************************************************************/
/* Index: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Index.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Index.helpers({
  prodEntry: function (){
    return Product.find({},{sort:{modified:-1}});
  },
  prodCount: function(){
    return Session.get('postCount');
  },
  reviewCount: function(){
    return Session.get('reviewCount')
  }
});

/*****************************************************************************/
/* Index: Lifecycle Hooks */
/*****************************************************************************/
Template.Index.created = function () {
  Meteor.call("getProdCount",function(err,result){
    Session.set('postCount', result)
    });
  Meteor.call("getReviewCount", function(err,result){
    Session.set('reviewCount', result);
  })
};

Template.Index.rendered = function () {
};

Template.Index.destroyed = function () {
};