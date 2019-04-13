/**
 * Routes
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `config/404.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on routes, check out:
 * http://sailsjs.org/#documentation
 */

module.exports.routes = {



    /**
     * We set the default language for all routes
     * **/
    '/*': function (req, res, next) {
        // res.setLocale(req.param('lang') || sails.config.i18n.defaultLocale);
        res.setLocale(sails.config.i18n.defaultLocale);
        return next();
    },
    // Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, etc. depending on your
    // default view engine) your home page.
    //
    // (Alternatively, remove this and add an `index.html` file in your `assets` directory)
    'get /': {
        controller: 'HomeController',
        action: 'index'
    },


    'GET /login': 'AuthController.login',
    'GET /logout': 'AuthController.logout',
    'GET /register': 'AuthController.register',

    'post /auth/local': 'AuthController.callback',
    'post /auth/local/:action': 'AuthController.callback',





    'get /auth/:provider': 'AuthController.provider',
    'get /auth/:provider/callback': 'AuthController.callback',


    // Custom routes here...

    /**
     * User routes
     */
    'get /api/user': 'UserController.getAll',
    'get /api/user/:id': 'UserController.getOne',
    'post /api/user': 'UserController.create',
    'put /api/user': 'UserController.update',
    //
    //  /**
    //     * Message routes
    //     *
    //     */
    //    'get /api/message': 'MessageController.getAll',
    //    'get /api/message/:id': 'MessageController.getOne',
    //    'post /api/message': 'MessageController.create',
    //    'put /api/message': 'MessageController.update',
    ////    'put /api/message/:id': 'MessageController.update',
    //
    //
    //    'delete /api/message/:id': 'MessageController.destroy',

    //todo
    'get /api/todo': 'TodoController.getAll',
    'get /api/todo/:id': 'TodoController.getOne',
    'post /api/todo': 'TodoController.create',
    'delete /api/todo/:id': 'TodoController.destroy',
    'put /api/todo': 'TodoController.update',

    // retrieve pdf
    //   'get /docs/:file' :
    'get /docs/:file':
    {
        controller: 'UploadController', //'TodoController',
        action: 'pdfview'
    },

    'get /api/images': 'ImagesController.findall',

    'get /images/:file':
    {
        controller: 'UploadController', //'TodoController',
        action: 'imageview'
    },
    'get /imageview1/:file':
    {
        controller: 'GalleryController', //'TodoController',
        action: 'imageview1'
    },

    '/upload': {
        controller: 'UploadController',
        action: 'uploadGallery'
    },

    //
    //'/upload': {
    //    controller: 'UploadController',
    //    action: 'uploadPdf' //pload
    //},

    // '/uploadx': {
    //     controller: 'UploadController',
    //     action: 'uploadCrew'
    // },


    // '/uploadSpecial': {
    //     controller: 'UploadController',
    //     action: 'uploadSpecial' //pload
    // },



    //    //WorkFlow
    // changed blueprint.js to  prefix: '/api'
    // if i use next line with    getAll: {method: 'GET', isArray: false},
    // then it goes directly to routine
    //   'get /api/workflow': 'WorkFlowController.getAll',

    'get /api/posts': 'PostsController.getList',
    'get /api/posts/:id': 'PostsController.getOne',
    'post /api/posts': 'PostsController.create',
    'put /api/posts': 'PostsController.update',
    'get /api/tags': 'PostsController.getTags',


    'get /api/tasks': 'TasksController.getList',
    'post /api/tasks': 'TasksController.create',
    'delete /api/tasks/:id': 'TasksController.destroy',
    'put /api/tasks': 'TasksController.update',

    'put /api/updatebookingnew': 'TasksController.updateBookingNew', // this is used when we create a new booking
    'put /api/tasksTrip': 'TasksController.updateTrip',// from booking form not kendo cal




    'get /api/gallery': 'UploadController.getGallery',
    'get /api/images/:file': {
        controller: 'GalleryController',
        action: 'imageview'
    },

    'get /api/imageviewthumbs/:file': {
        controller: 'GalleryController',
        action: 'imageviewthumbs'
    },



    'get /api/emailmonth': 'ContactController.emailmonth',

    'get /api/mandriltemplates': 'ContactController.findTemplates',





    // 'get /imagescrew/:file' :
    // // this is not needed
    // {
    //     controller:'UploadController', //'TodoController',
    //     action: 'imageviewcrew'
    // },

    'get /images/:dir/:file': {
        controller: 'GalleryController',
        action: 'imageview'
    },

    'get /api/galleryNew/:id': 'GalleryController.getGalleryNew',
    'get /api/galleryKendo/:id': 'GalleryController.getGalleryKendo',
    'get /api/galleryaticlesKendo/:id': 'GalleryController.getGalleryArticlesKendo',


    'get /api/gallerythumbsKendo/:id': 'GalleryController.getThumbsKendo',


    'get /api/galleryNewWallop/:id': 'GalleryController.getGalleryNewWallop',
    'get /api/getFader/:id': 'GalleryController.getFader',


    'get /api/menu': 'MenuController.getOne',
    'get /api/menu/find': 'MenuController.find',

    // contacts
    'post /api/contact': 'ContactController.create',


    //restangular



    // If a request to a URL doesn't match any of the custom routes above, it is matched
    // against Sails route blueprints.  See `config/blueprints.js` for configuration options
    // and examples.

    'get /home': 'HomeController.index',
    'get /about': 'HomeController.index',
    'get /messages': 'HomeController.index',
    'get /todos': 'HomeController.index'

};
