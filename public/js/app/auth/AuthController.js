define([ 'backbone', 'react', 'auth/classes/AuthForm' ],
  function(Backbone, React, AuthForm) {

    var AuthController = {

      isAuthenticated: function() {
        return false;
      },

      authenticate: function() {
        var authForm = AuthForm();
        React.renderComponent(authForm, document.getElementById('content'));
      }

    };

    return AuthController;
  }
);
