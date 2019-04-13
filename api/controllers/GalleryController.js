util = require('util')
    , _ = require('lodash')
    , Q = require('q')
    , path = require('path')
    , walk = require('walk')
    , sizeOf = require('image-size')
    , fs = require('fs.extra');
//  , uuid = require('node-uuid');
/* IN FILE UPLOAD SAVE WITH A SAFE FILENAME */

module.exports = {
    // imageview: function (req, res) {
    //     //console.log('gallery imageview ./api/docs... ', req.param('file'));
    //     filetype = req.param('file').substr(0, 3);
    //     dir = req.param('dir');
    //     if (dir !== undefined) {
    //         filepath = './api/docs/' + dir + '/';
    //     } else {
    //         filepath = './api/docs/';
    //     }
    //     fs.readFile(filepath + req.param("file"), "binary", function (error, file) {
    //         if (error) {
    //             res.writeHead(500, {"Content-Type": "text/plain"});
    //             res.write(error + "\n");
    //             res.end();
    //         }
    //         else {
    //             res.writeHead(200, {"Content-Type": "image/jpeg"});
    //             res.write(file, "binary");
    //             res.end();

    //         }
    //     });

    // },
  imageview: function (req, res) {
        //console.log('gallery imageview ./api/docs... ', req.param('file'));
        filetype = req.param('file').substr(0, 3);
        //dir = req.param('dir');
        // if (dir !== undefined) {
        //     filepath = './api/docs/' + dir + '/';
        // } else {
        //     filepath = './api/docs/';
        // }

        console.log(' imageview' ,req.param("file") );
        filepath = './api/images/';

        fs.readFile(filepath + req.param("file"), "binary", function (error, file) {
            if (error) {
                res.writeHead(500, {"Content-Type": "text/plain"});
                res.write(error + "\n");
                res.end();
            }
            else {
                res.writeHead(200, {"Content-Type": "image/jpeg"});
                res.write(file, "binary");
                res.end();

            }
        });

    },
    imageviewthumbs: function (req, res) {
        filetype = req.param('file').substr(0, 3);

        console.log(' imageviewthumbs' ,req.param("file") );
        filepath = './api/images/thumbs/';

        fs.readFile(filepath + req.param("file"), "binary", function (error, file) {
            if (error) {
                res.writeHead(500, {"Content-Type": "text/plain"});
                res.write(error + "\n");
                res.end();
            }
            else {
                res.writeHead(200, {"Content-Type": "image/jpeg"});
                res.write(file, "binary");
                res.end();

            }
        });

    },
getImage: function (imagepath) {
        console.log('getImage getImage', imagepath);
        //filetype = req.param('file').substr(0, 3);
        //dir = req.param('dir');
        //if (dir!==undefined) {
        //    filepath = './api/docs/'+dir+'/';
        //} else
        //{
        //    filepath = './api/docs/';
        //}
        fs.readFile(imagepath, "binary", function (error, file) {
            if (error) {
                res.writeHead(500, {"Content-Type": "text/plain"});
                res.write(error + "\n");
                res.end();
            }
            else {
                res.writeHead(200, {"Content-Type": "image/jpeg"});
                res.write(file, "binary");
                res.end();

            }
        });

    },
      imageview1: function (req, res) {
           console.log('imageview1 ');

          filepath = './api/images/' + req.param("file") 
          console.log('filepath ', filepath);

        fs.readFile(filepath , function (error, file) {
            if (error) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.write(error + "\n");
                res.end();
            }
            else {
                res.writeHead(200, { "Content-Type": "image/jpeg" });
                res.write(file, "binary");
                res.end();

            }
        });

    },
   
    _config: {}
};

//* Conserve aspect ratio of the orignal region. Useful when shrinking/enlarging
//* images to fit into a certain area.
//*
//* @param {Number} srcWidth Source area width
//* @param {Number} srcHeight Source area height
//* @param {Number} maxWidth Fittable area maximum available width
//* @param {Number} maxHeight Fittable area maximum available height
//* @return {Object} { width, heigth }
//*/
function calculateAspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight) {

    var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
    // console.log(' width: '+srcWidth*ratio+'  height: '+srcHeight*ratio );
    var a = Math.round(srcWidth * ratio);
    var b = Math.round(srcHeight * ratio);
    return {width: a, height: b};
}
function getImage(res, file) {

    console.log('===========================================');
    return res.write(file, "binary");

}
