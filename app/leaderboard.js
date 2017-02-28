PlayersList = new Mongo.Collection('players');

if(Meteor.isClient){
  console.log("Hello client");
  Template.leaderboard.helpers({
    'player': function() {
      return PlayersList.find();
    },
    'selectedClass': function(){
      return "selected";
    },
  });
  Template.leaderboard.events({
    'click .player': function(){
      var playerId = this._id;
      Session.set('selectedPlayer', playerId);
    }
  });
}

if(Meteor.isServer){
  console.log("Hello server");
}