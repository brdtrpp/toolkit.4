// Running code only when the template has been created, BUT NOT RENDERED YET!!
Template.process.onCreated(function() {

});

// Running code only when the template has been fully rendered
Template.process.onRendered(function() {

});

// Adding events per template
Template.process.events({
  'click .addApp': function(){
    Session.set('modalStatus', "addApp");
  },

  'click .app':function(){
    var proId = Session.get('pro');
    var app = Processes.findOne({_id: proId}).app;

    if (app === undefined){
      Session.set("appIndex", 0);
    } else {
      var appIndex = app.findIndex(obj => obj.appName == this.appName);
      Session.set("appIndex", appIndex);
    }

    var appName = this.appName;
    if( Session.equals('appId', appName) ) {
    } else {
      Session.set('appId', appName);
    }

  },

  'click .addSce': function(){
    Session.set('modalStatus', "addSce");
  },
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
    if (appId == undefined ){
      return []
    } else {
      var app = this.app.find(x => x.appName === appId);
      if (app == undefined) {
        return []
      } else {
        return app.scenarios
      }
    }
  }

});
