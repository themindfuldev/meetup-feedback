/** @jsx React.DOM */
// FeedbackDetail.jsx
define([ 'jquery', 'backbone', 'react', 'react.backbone' ],
  function($, Backbone, React){
    var meetupImg = 'img/meetup.png';

    var AuthForm = React.createBackboneClass({
      render: function () {
        return (
          <article>
            <img src={ meetupImg } />
            <button id="login" className="btn btn-danger">Sign in @ meetup.com</button>
          </article>
        );
      }
    });
    return AuthForm;
  }
);
