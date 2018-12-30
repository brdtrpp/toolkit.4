// Running code only when the template has been created, BUT NOT RENDERED YET!!
Template.activity.onCreated = function() {

};

// Running code only when the template has been fully rendered
Template.activity.onRendered = function() {

};

// Adding events per template
Template.activity.events({
  'click .addSub': function(){
    Session.set("sceIndex", 0);
    Session.set('modalStatus', "addSub");
  },

  'click .act': function(){
    console.log(this);
  }
});

Template.activity.helpers({
  subactivityItem(){
    return this.subactivity;
  }
});
