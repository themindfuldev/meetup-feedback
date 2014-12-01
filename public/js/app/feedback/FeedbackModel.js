// FeedbackModel.js
define([ 'jquery', 'backbone' ],
  function($, Backbone) {
    var FeedbackModel = Backbone.Model.extend({
      url: 'api/feedback',
      validate: function(attrs) {
      }
    });

    return FeedbackModel;
  }
);
