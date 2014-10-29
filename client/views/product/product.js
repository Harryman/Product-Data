/*****************************************************************************/
/* Product: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Product.events({
  'click #save':function(e,tmpl){
    e.preventDefault();
    var needsReview = [];
    reviewTick = function (pnt){
      if($(tmpl.find('#'+pnt+'nr')).is(':checked')){
        needsReview.push(pnt);
      }
    }
    var prodData = tmpl.data;
    var pn = $(tmpl.find('#pn')).val();
    var name = $(tmpl.find('#name')).val();
    reviewTick('name');
    var oldPartString = $(tmpl.find('#oldPart')).val();
    var oldPart = [];
    reviewTick('oldPart')
    var pubDesc = $(tmpl.find('#pubDesc')).val();
    reviewTick('pubDesc');
    var variationString = $(tmpl.find('#variations')).val();
    reviewTick('variations');
    var variations = [];
    var internalDesc = $(tmpl.find('#internalDesc')).val();
    reviewTick('internalDesc');
    var manPnString = $(tmpl.find('#manPn')).val();
    reviewTick('manPn');
    var manPn = [];
    var orderingNotes = $(tmpl.find('#orderingNotes')).val();
    reviewTick('orderingNotes');
    var notes = $(tmpl.find('#notes')).val();
    var relatedTagString = $(tmpl.find('#relatedTags')).val();
    var relatedTags = [];
    reviewTick('relatedTags');
    var tagString = $(tmpl.find('#tags')).val();
    var tags = [];
    reviewTick('tags');
    var price = $(tmpl.find('#price')).val();
    reviewTick('price');
    var cost = $(tmpl.find('#cost')).val();
    reviewTick('cost');
    var handling = $(tmpl.find('#handling')).val();
    reviewTick('handling');
    var length = $(tmpl.find('#length')).val();
    var width = $(tmpl.find('#width')).val();
    var height = $(tmpl.find('#height')).val();
    var weight = $(tmpl.find('#weight')).val();
    var inventory = $(tmpl.find('#inventory')).val();
    var isAssembly = $(tmpl.find('#isAssembly')).is(':checked');
    var modified = new Date;
    $.each(oldPartString.split(","), function(){
      if(this != ""){
        oldPart.push($.trim(this));
      }
    });
    $.each(variationString.split(","), function(){
      if(this != ""){
        variations.push($.trim(this));
      }
    });
    $.each(relatedTagString.split(","), function(){
      if(this != ""){
        relatedTags.push($.trim(this));
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
        variations:variations,
        internalDesc:internalDesc,
        manPn:manPn,
        orderingNotes:orderingNotes,
        notes:notes,
        relatedTags:relatedTags,
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
    var needsReview = [];
    reviewTick = function (pnt){
      if($(tmpl.find('#'+pnt+'nr')).is('checked')){
        needsReview.push(pnt);
      }
    }
    var prodData = tmpl.data;
    var pn = $(tmpl.find('#pn')).val();
    var name = $(tmpl.find('#name')).val();
    reviewTick('name');
    var oldPartString = $(tmpl.find('#oldPart')).val();
    var oldPart = [];
    reviewTick('oldPart')
    var pubDesc = $(tmpl.find('#pubDesc')).val();
    reviewTick('pubDesc');
    var variationString = $(tmpl.find('#variations')).val();
    reviewTick('variations');
    var variations = [];
    var internalDesc = $(tmpl.find('#internalDesc')).val();
    reviewTick('internalDesc');
    var manPnString = $(tmpl.find('#manPn')).val();
    reviewTick('manPn');
    var manPn = [];
    var orderingNotes = $(tmpl.find('#orderingNotes')).val();
    reviewTick('orderingNotes');
    var notes = $(tmpl.find('#notes')).val();
    var relatedTagString = $(tmpl.find('#relatedTags')).val();
    var relatedTags = [];
    reviewTick('relatedTags');
    var tagString = $(tmpl.find('#tags')).val();
    reviewTick('tags');
    var tags = [];
    var price = $(tmpl.find('#price')).val();
    reviewTick('price');
    var cost = $(tmpl.find('#cost')).val();
    reviewTick('cost');
    var handling = $(tmpl.find('#handling')).val();
    reviewTick('handling');
    var length = $(tmpl.find('#length')).val();
    var width = $(tmpl.find('#width')).val();
    var height = $(tmpl.find('#height')).val();
    var weight = $(tmpl.find('#weight')).val();
    var inventory = $(tmpl.find('#inventory')).val();
    var isAssembly = $(tmpl.find('#isAssembly')).is(':checked');
    var modified = new Date;
    $.each(oldPartString.split(","), function(){
      if(this != ""){
        oldPart.push($.trim(this));
      }
    });
    $.each(variationString.split(","), function(){
      if(this != ""){
        variations.push($.trim(this));
      }
    });
    $.each(relatedTagString.split(","), function(){
      if(this != ""){
        relatedTags.push($.trim(this));
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
      variations:variations,
      internalDesc:internalDesc,
      manPn:manPn,
      orderingNotes:orderingNotes,
      notes:notes,
      tags:tags,
      relatedTags:relatedTags,
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
  aCheck:function(){
  if(this.isAssembly){
      return 'checked';
    }
  },
  chkd: function (blah){
    if(this.needsReview)
      var res = this.needsReview.some(function(ret){
        if(ret+'nr' == blah){
          return 'checked';
        }
      });
      if(res){
        return 'checked'
      }
  }
  /*reviewStyle: function (div){
    if(this[div])
  }*/
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