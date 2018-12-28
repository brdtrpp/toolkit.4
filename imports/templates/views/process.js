// Running code only when the template has been created, BUT NOT RENDERED YET!!
Template.process.onCreated(function() {
  Session.set('pro', this.data._id);
});

// Running code only when the template has been fully rendered
Template.process.onRendered(function() {
  Session.set('pro', this.data._id);
});

// Adding events per template
Template.process.events({
  'click .app': function(){
    var proId = Session.get('pro');
    var app = Processes.findOne({_id: proId}).app;

    if (app === undefined){
      Session.set("appIndex", 0);
    } else {
      var appIndex = app.findIndex(obj => obj.appName == this.appName);
      Session.set("appIndex", appIndex);
    }

    var appName = this.appName;
    Session.set('appId', appName);
    Session.set('modalStatus', "app");
  },

  'click .addSce': function(){
    Session.set('modalStatus', "sce");
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
      return "primary";
    } else {
      return "default";
    }
  },

  inApp(){
    var appId = Session.get("appId");
    if (appId === undefined){
      return false;
    } else {
      return true;
    }
  },

  scenarioItem(){
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
