// FeedbackCollection.js
define([ 'jquery', 'backbone', 'models/FeedbackModel' ],
  function($, Backbone, FeedbackModel) {

    var FeedbackCollection = Backbone.Collection.extend({
      model: FeedbackModel
    });

    return FeedbackCollection;
  }
);
