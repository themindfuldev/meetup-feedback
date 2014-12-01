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
                <li>
                  <h3>{ question }</h3>
                  <input id="question-{ index }" type="text" placeholder="Your answer" />
                </li>
              );
          });

          return (
            <form>
              <ul>
                <li>Find yourself: <AttendanceSelectList />
                  <div className="hidden">
                    <label for="name">Name: </label>
                    <input id="name" type="text" placeholder="Your name" />
                  </div>
                </li>
                <li>
                  <label for="email">Email (it wont be publicly exposed): </label>
                  <input id="email" type="text" placeholder="you@yourdomain.com" />
                </li>
              </ul>
              <ol>
                { questionsList }
              </ol>
              <input type="submit" value="Post" />
            </form>
          );
      }
    });
    return FeedbackItem;
  }
);
