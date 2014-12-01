/** @jsx React.DOM */
// FeedbackList.jsx
define([ 'jquery', 'backbone', 'react', 'react.backbone', 'feedback/classes/FeedbackItem' ],
  function($, Backbone, React, ReactBackbone, FeedbackItem){
    var FeedbackList = React.createBackboneClass({
        render: function () {
          var feedbackItemsList = this.getCollection().map(function(feedbackItem) {
              return FeedbackItem({model: feedbackItem});
          });

          return (
            React.DOM.ul({className: "feedback-list list-group"}, 
              feedbackItemsList 
            )
          );
      }
    });
    return FeedbackList;
  }
);
