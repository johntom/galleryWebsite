// module.exports = {
// 	// getAll: function(req, res) {
// 	// 	Menu.getAll()
// 	// 	.sp`read(function`(models) {
//     //             console.log('in getAll user', models)

//     //             res.json({data:models});
// 	// 	})
// 	// 	.fail(function(err) {
// 	// 		// An error occured
// 	// 	});
// 	// },


// 	getOne: function(req, res) {
//         console.log('getone')
// 		Menu.getOne({'menuid':1})
// 		.spread(function(model) {
//                 console.log('in getOne user', model)
// 			res.json(model);
// 		})
// 		.fail(function(err) {
// 			// res.send(404);
// 		});
// 	}

// };


module.exports = {

    find: function(req, res) {
        Menu.getAll()
        		Menu.getOne({'menuid':1})
		.spread(function(model) {
                console.log('in getOne user', model)
			res.json(model);
		})
		.fail(function(err) {
			// res.send(404);
		});
	 
    },
    

	getOne: function(req, res) {
        console.log('getone')
		//Menu.getOne({'menuid':1})
	  Menu.find({'menuid':1}).sort({Cat1:1,SortOrder:1}).exec(function (err, images) {
          console.log('  Book.find.........',images[0]);

          if (err) return res.negotiate(err);
          return res.json({'data':images});//{'data':todos});
      });
	}
  
};