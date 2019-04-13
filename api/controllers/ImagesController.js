'use strict';

// var _ = require('lodash');
// var actionUtil = require('sails/lib/hooks/blueprints/actionUtil');

// module.exports = _.merge(_.cloneDeep(require('../base/Controller')), {
module.exports = {
  findall: function(req, res) {
  console.log('findall.........');
  
      Images.find().sort({Cat1:1,SortOrder:1}).exec(function (err, images) {
          console.log('  Book.find.........',images[0]);

          if (err) return res.negotiate(err);
          return res.json({'data':images});//{'data':todos});
      });
  }
}
