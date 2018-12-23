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
      var viewing = Session.get('processes');
      if (viewing){
        Session.set('processes', false);
      } else {
        Session.set('processes', true);
      }
    },

    'click .goPro': function(event, template) {
      // console.log('/process/'+this._id);
      Router.go('/process/'+this._id);
    }
});


Template.processes.helpers({
  viewing(){
    var viewing = Session.get('processes');
    return !viewing;
  },

  process(){
    return Processes.find().fetch();
  },

  getPro(){
    return this._id;
  }
});
