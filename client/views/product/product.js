/*****************************************************************************/
/* Product: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Product.events({
  'click #save':function(e,tmpl){
    e.preventDefault();
    var prodData = tmpl.data;
    var pn = $(tmpl.find('#pn')).val();
    var name = $(tmpl.find('#name')).val();
    var oldPartString = $(tmpl.find('#oldPart')).val();
    var oldPart = [];
    var pubDesc = $(tmpl.find('#pubDesc')).val();
    var internalDesc = $(tmpl.find('#internalDesc')).val();
    var manPnString = $(tmpl.find('#manPn')).val();
    var manPn = [];
    var orderingNotes = $(tmpl.find('#orderingNotes')).val();
    var notes = $(tmpl.find('#notes')).val();
    var tagString = $(tmpl.find('#tags')).val();
    var tags = [];
    var price = $(tmpl.find('#price')).val();
    var cost = $(tmpl.find('#cost')).val();
    var handling = $(tmpl.find('#handling')).val();
    var length = $(tmpl.find('#length')).val();
    var width = $(tmpl.find('#width')).val();
    var height = $(tmpl.find('#height')).val();
    var weight = $(tmpl.find('#weight')).val();
    var inventory = $(tmpl.find('#inventory')).val();
    var isAssembly = $(tmpl.find('#isAssembly')).is(':checked');
    var needsReview = $(tmpl.find('#review')).is(':checked');
    var modified = new Date;
    $.each(oldPartString.split(","), function(){
      if(this != ""){
        oldPart.push($.trim(this));
      }
    });
    $.each(tagString.split(","), function(){
      if(this != ""){
        tags.push($.trim(this));
      }
    });
    $.each(manPnString.split(","), function(){
      if(this != ""){
        manPn.push($.trim(this));
      }
    });
    Product.update({_id:prodData._id},{
      $set:{
        pn:pn,
        name:name,
        oldPart:oldPart,
        pubDesc:pubDesc,
        internalDesc:internalDesc,
        manPn:manPn,
        orderingNotes:orderingNotes,
        notes:notes,
        tags:tags,
        price:price,
        cost:cost,
        handling:handling,
        length:length,
        width:width,
        height:height,
        weight:weight,
        inventory:inventory,
        isAssembly:isAssembly,
        needsReview:needsReview,
        modified:modified
      },
      $push:{
        changeLog:{who:Meteor.user()._id,when:modified}
      }
    });
    Router.go('index');
  },
  'click #delete': function(e,tmpl){
    e.preventDefault();
    Product.remove({_id:tmpl.data._id});
    Router.go('index');
  },
  'click #saveNew': function(e,tmpl){
    e.preventDefault();
    var prodData = tmpl.data;
    var pn = $(tmpl.find('#pn')).val();
    var name = $(tmpl.find('#name')).val();
    var oldPartString = $(tmpl.find('#oldPart')).val();
    var oldPart = [];
    var pubDesc = $(tmpl.find('#pubDesc')).val();
    var internalDesc = $(tmpl.find('#internalDesc')).val();
    var manPnString = $(tmpl.find('#manPn')).val();
    var manPn = [];
    var orderingNotes = $(tmpl.find('#orderingNotes')).val();
    var notes = $(tmpl.find('#notes')).val();
    var tagString = $(tmpl.find('#tags')).val();
    var tags = [];
    var price = $(tmpl.find('#price')).val();
    var cost = $(tmpl.find('#cost')).val();
    var handling = $(tmpl.find('#handling')).val();
    var length = $(tmpl.find('#length')).val();
    var width = $(tmpl.find('#width')).val();
    var height = $(tmpl.find('#height')).val();
    var weight = $(tmpl.find('#weight')).val();
    var inventory = $(tmpl.find('#inventory')).val();
    var isAssembly = $(tmpl.find('#isAssembly')).is(':checked');
    var needsReview = $(tmpl.find('#review')).is(':checked');
    var modified = new Date;
    $.each(oldPartString.split(","), function(){
      if(this != ""){
        oldPart.push($.trim(this));
      }
    });
    $.each(tagString.split(","), function(){
      if(this != ""){
        tags.push($.trim(this));
      }
    });
    $.each(manPnString.split(","), function(){
      if(this != ""){
        manPn.push($.trim(this));
      }
    });
    Product.insert({
      pn:pn,
      name:name,
      oldPart:oldPart,
      pubDesc:pubDesc,
      internalDesc:internalDesc,
      manPn:manPn,
      orderingNotes:orderingNotes,
      notes:notes,
      tags:tags,
      price:price,
      cost:cost,
      handling:handling,
      length:length,
      width:width,
      height:height,
      weight:weight,
      inventory:inventory,
      isAssembly:isAssembly,
      needsReview:needsReview,
      modified:modified,
      changeLog:{
        who:Meteor.user()._id,
        when:modified
      }
    });
    Router.go('index');
  }
});

Template.Product.helpers({
  /*partNum: function() {
    var prod = new Product(Util,{});
    if(this.pn !== undefined){
       this.pn = prod.pn.getAvailable();
    }
    return this.pn;
  },*/

    rCheck :function(){
    if(this.needsReview){
      return 'checked';
    }
  },
  aCheck:function(){
  if(this.isAssembly){
      return 'checked';
    }
  }
});

/*****************************************************************************/
/* Product: Lifecycle Hooks */
/*****************************************************************************/
Template.Product.created = function () {
};

Template.Product.rendered = function () {
};

Template.Product.destroyed = function () {
};