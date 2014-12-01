/** @jsx React.DOM */
// FeedbackDetail.jsx
define([ 'jquery', 'backbone', 'react', 'react.backbone' ],
  function($, Backbone, React){
    var defaultPhoto = 'img/avatar.jpg';

    var FeedbackItem = React.createBackboneClass({
      render: function () {
        var photoURL = this.getModel().get('photo') || defaultPhoto,
            date = new Date( this.getModel().get('time') ).toLocaleString(),
            questionsItems = this.getModel().get('questions').map(function(question) {
            return (
              React.DOM.li({className: "question"}, 
                React.DOM.div({className: "question-title"},  question.title), 
                 question.answer
              )
            );
        });

        return (
          React.DOM.section({className: "feedback-detail"}, 
            React.DOM.header(null, 
              React.DOM.img({src: photoURL, className: "photo"}), 
              React.DOM.h2(null,  this.getModel().get('name'), "'s feedback at ", date )
            ), 
            React.DOM.ol(null, 
              questionsItems 
            ), 
            React.DOM.a({href: "#"}, "Back to feedbacks")
          )
        );
      }
    });
    return FeedbackItem;
  }
);
