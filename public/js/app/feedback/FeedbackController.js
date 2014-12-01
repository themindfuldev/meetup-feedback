define([ 'jquery', 'backbone', 'react', 'feedback/FeedbackModel', 'feedback/FeedbackCollection', 'feedback/classes/FeedbackList', 'feedback/classes/FeedbackDetail', 'feedback/classes/FeedbackForm' ],
  function($, Backbone, React, FeedbackModel, FeedbackCollection, FeedbackList, FeedbackDetail, FeedbackForm) {

    var FeedbackController = {

      feedbackList: function() {
        var feedbackCollection = new FeedbackCollection([ {
            id: 1,
            name: 'Aaron Williams',
            photo: 'http://photos3.meetupstatic.com/photos/member/6/b/5/9/thumb_16227481.jpeg',
            time: 1410144641288
          }, {
            id: 2,
            name: 'Alan Ramsey',
            time: 1410144341288
          }, {
            id: 3,
            name: 'Arnold Sandoval',
            photo: 'http://photos1.meetupstatic.com/photos/member/a/5/b/6/thumb_112902422.jpeg',
            time: 1410124641588
          }
        ]);

        var feedbackList = FeedbackList({collection: feedbackCollection});
        React.renderComponent(feedbackList, document.getElementById('content'));
      },

      feedbackDetail: function(id) {
        var feedbackModel = new FeedbackModel({
            id: 1,
            name: 'Aaron Williams',
            photo: 'http://photos3.meetupstatic.com/photos/member/6/b/5/9/thumb_16227481.jpeg',
            time: 1410144641288,
            questions: [
              {
                title: 'Topic suggestions for next Backbone.js meetups?',
                answer: 'What about React.js?'
              },

              {
                title: 'Would you be interested on giving a talk/demo/sharing something with the Backbone.js community? If so, we will contact you on meetup.com/email.',
                answer: 'Yes, I want to talk about React.js'
              },
              {
                title: 'What can we do better next time?',
                answer: 'More beer!'
              }

            ]
          });

        var feedbackList = FeedbackDetail({model: feedbackModel});
        React.renderComponent(feedbackList, document.getElementById('content'));
      }
    };

    return FeedbackController;
  }
);
