/*****************************************************************************/
/* NeedsReview: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.NeedsReview.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.NeedsReview.helpers({
  ent: function (){
   return Product.find();
  },
    chkd: function (blah){
    if(this.needsReview)
      var res = this.needsReview.some(function(ret){
        if(ret == blah){
          return 'checked';
        }
      });
      if(res){
        return 'checked'
      }
  }
});

/*****************************************************************************/
/* NeedsReview: Lifecycle Hooks */
/*****************************************************************************/
Template.NeedsReview.created = function () {
};

Template.NeedsReview.rendered = function () {
};

Template.NeedsReview.destroyed = function () {
};