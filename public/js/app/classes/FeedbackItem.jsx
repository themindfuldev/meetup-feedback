/** @jsx React.DOM */
// FeedbackItem.jsx
define([ 'jquery', 'backbone', 'react', 'react.backbone' ],
  function($, Backbone, React){
    var defaultPhoto = 'img/avatar.jpg';

    var FeedbackItem = React.createBackboneClass({
        render: function () {
          var photoURL = this.getModel().get('photo') || defaultPhoto,
              date = new Date( this.getModel().get('time') ).toLocaleString(),
              feedbackURL = '/feedback/' + this.getModel().get('id');

          return (
            <li className="list-group-item feedback-item">
              <img src={ photoURL } className="photo"/>
              <div className="description">{ this.getModel().get('name') } gave a feedback at { date }</div>
              <a href={ feedbackURL }>Read feedback</a>
            </li>
          );
      }
    });
    return FeedbackItem;
  }
);
