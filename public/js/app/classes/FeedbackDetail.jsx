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
              <li className="question">
                <div className="question-title">{ question.title }</div>
                { question.answer }
              </li>
            );
        });

        return (
          <section className="feedback-detail">
            <header>
              <img src={ photoURL } className="photo"/>
              <h2>{ this.getModel().get('name') }'s feedback at { date }</h2>
            </header>
            <ol>
              { questionsItems }
            </ol>
            <a href="#">Back to feedbacks</a>
          </section>
        );
      }
    });
    return FeedbackItem;
  }
);
