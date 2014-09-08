/** @jsx React.DOM */
// FeedbackDetail.jsx
define([ 'jquery', 'backbone', 'react', 'react.backbone' ],
  function($, Backbone, React){
    var defaultPhoto = 'img/avatar.jpg';

    var FeedbackItem = React.createBackboneClass({
      render: function () {
        var photoURL = this.getModel().get('photo') || defaultPhoto,
            questionsItems = this.getModel().get('questions').map(function(question) {
            return (
              React.DOM.li(null, 
                React.DOM.h3(null,  question.title), 
                 question.answer
              )
            );
        });

        return (
          React.DOM.section(null, 
            React.DOM.header(null, 
              React.DOM.img({src: "{ photoURL }", className: "photo"}), 
              React.DOM.div({className: "title"},  this.getModel().get('name'), "'s feedback at ",  this.getModel('time'))
            ), 
            React.DOM.ol(null, 
              questionsItems 
            ), 
            React.DOM.a({href: "/"}, "Back to feedbacks")
          )
        );
      }
    });
    return FeedbackItem;
  }
);
