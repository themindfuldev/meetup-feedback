/** @jsx React.DOM */
// FeedbackForm.jsx
define([ 'jquery', 'backbone', 'react', 'react.backbone' ],
  function($, Backbone, React){
    var questionList = [
          'Topic suggestions for next Backbone.js meetups?',
          'Would you be interested on giving a talk/demo/sharing something with the Backbone.js community? If so, we will contact you on meetup.com/email.',
          'What can we do better next time?'
        ];

    var FeedbackItem = React.createBackboneClass({
        render: function () {
          var questionsList = questionList.map(function(question, index) {
              return (
                React.DOM.li(null, 
                  React.DOM.h3(null, question ), 
                  React.DOM.input({id: "question-{ index }", type: "text", placeholder: "Your answer"})
                )
              );
          });

          return (
            React.DOM.form(null, 
              React.DOM.ul(null, 
                React.DOM.li(null, "Find yourself: ", AttendanceSelectList(null), 
                  React.DOM.div({className: "hidden"}, 
                    React.DOM.label({for: "name"}, "Name: "), 
                    React.DOM.input({id: "name", type: "text", placeholder: "Your name"})
                  )
                ), 
                React.DOM.li(null, 
                  React.DOM.label({for: "email"}, "Email (it wont be publicly exposed): "), 
                  React.DOM.input({id: "email", type: "text", placeholder: "you@yourdomain.com"})
                )
              ), 
              React.DOM.ol(null, 
                questionsList 
              ), 
              React.DOM.input({type: "submit", value: "Post"})
            )
          );
      }
    });
    return FeedbackItem;
  }
);
