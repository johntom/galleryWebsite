/**
 * Connections
 *
 * The `connections` configuration object lets you create different global "saved settings"
 * that you can mix and match in your models.  The `default` option indicates which
 * "saved setting" should be used if a model doesn't have a connection specified.
 *
 * Note: If you're using version control, you should put your passwords/api keys
 * in `config/local.js`, not here, in case you inadvertently push them up to your repository.
 *
 * For more information on configuration, check out:
 * http://sailsjs.org/#documentation
 */

module.exports.connections = {

  // Local disk storage for DEVELOPMENT ONLY
  //
  // Installed by default.
  //
  localDiskDb: {
    adapter: 'sails-disk'
  },


    someMongodbServerx: {
        adapter   : 'sails-mongo',
        host      : 'localhost',
        port      : 27017,
        database: 'galleryNM'

    },
  // someMongodbServerMLAB: {
  //       adapter   : 'sails-mongo',
  //       host      : 'mongodb://johntom:nm5800@ds153380.mlab.com',
  //       port      : 53380,
  //       database: 'gallerynm'

  //   }
   someMongodbServer: {
     adapter   : 'sails-mongo',
url:"mongodb://johntom:nm5800@ds153380.mlab.com:53380/gallerynm?readPreference=primary"
   }
};
