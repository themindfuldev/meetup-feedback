// FeedbackCollection.js
define([ 'jquery', 'backbone', 'feedback/FeedbackModel' ],
  function($, Backbone, FeedbackModel) {

    var FeedbackCollection = Backbone.Collection.extend({
      model: FeedbackModel
    });

    return FeedbackCollection;
  }
);
