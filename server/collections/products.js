/*
 * Add query methods like this:
 *  Products.findPublic = function () {
 *    return Products.find({is_public: true});
 *  }
 */
Product.allow({
  insert: function (userId, doc) {
    if(authChk()){
      return true;
    }
    else{
      return false;
    }
  },

  update: function (userId, doc, fieldNames, modifier) {
    if(authChk()){
      return true;
    }
    else{
      return false;
    }
  },

  remove: function (userId, doc) {
    if(authChk()){
      return true;
    }
    else{
      return false;
    }
  }
});

Product.deny({
  insert: function (userId, doc) {
    return false;
  },

  update: function (userId, doc, fieldNames, modifier) {
    return false;
  },

  remove: function (userId, doc) {
    return false;
  }
});