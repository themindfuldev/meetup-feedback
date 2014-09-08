/** @jsx React.DOM */
// FeedbackList.jsx
define([ 'jquery', 'backbone', 'react', 'react.backbone', 'classes/FeedbackItem' ],
  function($, Backbone, React, ReactBackbone, FeedbackItem){
    var FeedbackList = React.createBackboneClass({
        render: function () {
          var feedbackItemsList = this.getCollection().map(function(feedbackItem) {
              return <FeedbackItem model={feedbackItem} />;
          });

          return (
            <ul className="feedback-list list-group">
              { feedbackItemsList }
            </ul>
          );
      }
    });
    return FeedbackList;
  }
);
