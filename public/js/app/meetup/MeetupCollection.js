// FeedbackCollection.js
define([ 'jquery', 'backbone' ],
  function($, Backbone) {

    var MeetupCollection = Backbone.Collection.extend({
        url: 'https://api.meetup.com/2/events?&sign=true&key=26705b1d7e343b6f73806444521c712b&photo-host=public&status=past&group_urlname=Backbone-js-Hackers&time=1410487200000,1m&page=20&desc=desc'
    });

    return MeetupCollection;
  }
);
