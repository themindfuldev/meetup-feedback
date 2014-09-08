/** @jsx React.DOM */
// FeedbackItem.jsx
define([ 'jquery', 'backbone', 'react', 'react.backbone' ],
  function($, Backbone, React){
    var defaultPhoto = 'img/avatar.jpg';

    var FeedbackItem = React.createBackboneClass({
        render: function () {
          var photoURL = this.getModel().get('photo') || defaultPhoto,
              date = new Date( this.getModel().get('time') ).toLocaleString(),
              feedbackURL = '#feedback/' + this.getModel().get('id'),
              itemKey = 'feedback-item-' + this.getModel().get('id');

          return (
            React.DOM.li({key: itemKey, className: "list-group-item feedback-item"}, 
              React.DOM.img({src: photoURL, className: "photo"}), 
              React.DOM.div({className: "description"},  this.getModel().get('name'), " gave a feedback at ", date ), 
              React.DOM.a({href: feedbackURL }, "Read feedback")
            )
          );
      }
    });
    return FeedbackItem;
  }
);
