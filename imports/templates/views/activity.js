// Running code only when the template has been created, BUT NOT RENDERED YET!!
Template.activity.onCreated = function() {

};

// Running code only when the template has been fully rendered
Template.activity.onRendered = function() {

};

// Adding events per template
Template.activity.events({
  'click .sub': function(){
    Session.set('modalStatus', "sub");
  }
});

Template.activity.helpers({
  subactivityItem(){
    return this.subactivity;
  }
});
