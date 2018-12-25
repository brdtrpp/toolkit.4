// Running code only when the template has been created, BUT NOT RENDERED YET!!
Template.modal.onCreated(function() {

});

// Running code only when the template has been fully rendered
Template.modal.onRendered(function() {

});

// Adding events per template
Template.modal.events({

});

Template.modal.helpers({
  proId(){
    var proId = Session.get('pro');
    return Processes.findOne({_id: proId});
  },

  scenarioNumber(){
    var appId = Session.get("appId");
    var proId = Session.get('pro');
    var proApps = Processes.findOne({_id: proId}).app;
    if (proApps != undefined){
      var num = proApps.findIndex(i => i.appName === appId);
      if (num === -1) {
        return "app.0.scenarios";
      } else {
        return "app."+ num +".scenarios";
      }
    } else {
      return "app.0.scenarios";
    }
  },

  statusApp(){
    var status = Session.get("modalStatus");
    if (status == "app"){
      return true;
    } else {
      return false;
    }
  },

  statusSce(){
    var status = Session.get("modalStatus");
    if (status == "sce"){
      return true;
    } else {
      return false;
    }
  }

});
