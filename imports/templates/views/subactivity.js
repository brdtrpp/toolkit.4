// Running code only when the template has been created, BUT NOT RENDERED YET!!
Template.subactivity.onCreated = function() {
};

// Running code only when the template has been fully rendered
Template.subactivity.onRendered = function() {
};

// Adding events per template
Template.subactivity.events({
  'click .subItem': function(){
    console.log(this);
    // $('').collapse("toggle")
  }
});

Template.subactivity.helpers({

});
