// Init.js
// =======
require.config({
  // Sets the js folder as the base directory for all future relative paths
  baseUrl: './js',
  // 3rd party script alias names (Easier to type "jquery" than "libs/jquery, etc")
  // probably a good idea to keep version numbers in the file names for updates checking
  paths: {
    // Core Libraries
    // ==============
    'jquery'                : 'libs/jquery/dist/jquery',
    'underscore'            : 'libs/lodash/dist/lodash',
    'backbone'              : 'libs/backbone/backbone',
    'react'                 : 'libs/react/react',
    'bootstrap'             : 'libs/bootstrap/dist/js/bootstrap',
    // Plugins
    // =======
    'backbone.validateAll'  : 'libs/plugins/Backbone.validateAll',
    'react.backbone'        : 'libs/react.backbone/react.backbone',
    'text'                  : 'libs/text/text',
    // Application Folders
    // ===================
    'collections'           : 'app/collections',
    'models'                : 'app/models',
    'routers'               : 'app/routers',
    'controllers'           : 'app/controllers',
    'classes'               : 'app/classes',
  },
  // Sets the configuration for your third party scripts that are not AMD compatible
  shim: {
    // Bootstrap
    'bootstrap': [ 'jquery' ],
    // Backbone
    'backbone': {
      // Depends on underscore/lodash and jQuery
      'deps': [ 'underscore', 'jquery' ],
      // Exports the global window.Backbone object
      'exports': 'Backbone'
    },
    // Backbone.validateAll plugin that depends on Backbone
    'backbone.validateAll': [ 'backbone' ]
  }
});

// Includes Desktop Specific JavaScript files here (or inside of your Desktop router)
require([ 'jquery', 'backbone', 'routers/Router', 'bootstrap', 'backbone.validateAll' ],
  function($, Backbone, Router) {
    new Router();
    Backbone.history.start();
  }
);
