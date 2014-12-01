define([ 'backbone', 'auth/AuthController', 'meetup/MeetupController', 'feedback/FeedbackController' ],
  function(Backbone, authController, meetupController, feedbackController) {

    var Router = Backbone.Router.extend({

      initialize: function() {
        this.on('route', this.checkAuthentication);
      },

      routes: {
        '': meetupController.meetupList,
        'feedbackList': feedbackController.feedbackList,
        'feedback/:id': feedbackController.feedbackDetail,
        'authenticate': authController.authenticate
      },

      checkAuthentication: function(router, route, params){
        if (!authController.isAuthenticated()) {
          this.navigate('authenticate');
        }
      }

    });

    return Router;
  }
);
