define([ 'backbone', 'react' ],
  function(Backbone, React) {

    var AuthController = {

      isAuthenticated: function() {
        return false;
      },

      authenticate: function() {
        console.log('will authenticate');
      }

    };

    return AuthController;
  }
);
