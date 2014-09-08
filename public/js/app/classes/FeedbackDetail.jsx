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
              <li>
                <h3>{ question.title }</h3>
                { question.answer }
              </li>
            );
        });

        return (
          <section>
            <header>
              <img src="{ photoURL }" className="photo"/>
              <div className="title">{ this.getModel().get('name') }'s feedback at { this.getModel('time')}</div>
            </header>
            <ol>
              { questionsItems }
            </ol>
            <a href="/">Back to feedbacks</a>
          </section>
        );
      }
    });
    return FeedbackItem;
  }
);
