/** @jsx React.DOM */
// FeedbackDetail.jsx
define([ 'jquery', 'backbone', 'react', 'react.backbone' ],
  function($, Backbone, React){
    var meetupImg = 'img/meetup.png';

    var AuthForm = React.createBackboneClass({
      render: function () {
        return (
          React.DOM.article(null, 
            React.DOM.img({src: meetupImg }), 
            React.DOM.button({id: "login", className: "btn btn-danger"}, "Sign in @ meetup.com")
          )
        );
      }
    });
    return AuthForm;
  }
);
