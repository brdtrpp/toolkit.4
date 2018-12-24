// This file is an example of how to perform different
// tasks per template at different moments


// Running code only when the template has been created, BUT NOT RENDERED YET!!
Template.processes.onCreated = function() {
  Session.set('processes', true)
};

// Running code only when the template has been fully rendered
Template.processes.onRendered = function() {
    Session.set('processes', true)
};

// Adding events per template
Template.processes.events({
    'click .addProcess': function(event, template) {
      var process = Session.get('processes');
      if (process){
        Session.set('processes', false);
      } else {
        Session.set('processes', true);
      }
    },
});


Template.processes.helpers({
  viewing(){
    var process = Session.get('processes');
    return process;
  },

  process(){
    return Processes.find().fetch();
  },

  getPro(){
    return this._id;
  }
});
