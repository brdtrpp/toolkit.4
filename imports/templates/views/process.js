// Running code only when the template has been created, BUT NOT RENDERED YET!!
Template.process.onCreated = function() {

};

// Running code only when the template has been fully rendered
Template.process.onRendered = function() {

};

// Adding events per template
Template.process.events({
  'click .app': function(){
    Session.set('appId', this.appName);
    },

    'click .addSce': function(){
      $('#addSce').collapse('toggle');
      $('#addSce2').collapse('toggle');
    },
    // 'click .clone-application': function(){
    //   var app = Session.get('app');
    //   var pro = Session.get('process');
    //   Meteor.call('cloneApplication', pro, app);
    // },
    // 'click .delete-application': function(){
    //   var app = Session.get('appId');
    //   var pro = Session.get('process');
    //   Meteor.call('deleteApplication', pro, app);
    // },
    // 'click .template-application': function(){
    //   var app = Session.get('appId');
    //   var pro = Session.get('process');
    //   Meteor.call('templateApplication', pro, app);
    // },
});

// Adding events per template
Template.process.helpers({

  active(){
    if (Session.equals("appId", this.appName)){
      return "primary"
    } else {
      return "default";
    }
  },

  scenario(){
    var appId = Session.get("appId");
    if (appId === undefined ){
      return []
    } else {
      var app = this.app.find(x => x.appName === appId);
      if (app.scenarios === undefined) {
        return []
      } else {
        return app.scenarios
      }
    }

  }

});
