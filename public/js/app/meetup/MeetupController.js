define([ 'backbone', 'react', 'meetup/MeetupCollection' ],
  function(Backbone, React, MeetupCollection) {

    var MeetupController = {

      meetupList: function() {
        var meetupCollection = new MeetupCollection();

        console.log('meetupList');

        // meetupCollection.fetch(function(data){
        //   console.log(data);
        // });

        //https://secure.meetup.com/oauth2/authorize?client_id=dvbvli4uv21pvf2c9v6kropedt&response_type=token&redirect_uri=http://tiagorg.com/meetup-feedback

      }

    };

    return MeetupController;
  }
);
