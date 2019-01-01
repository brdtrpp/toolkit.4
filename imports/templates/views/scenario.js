// Running code only when the template has been created, BUT NOT RENDERED YET!!
Template.scenario.onCreated = function() {

};

// Running code only when the template has been fully rendered
Template.scenario.onRendered = function() {

};

// Adding events per template
Template.scenario.events({
  'click .addAct': function(){
    Session.set('modalStatus', "addAct");
  },

  'click .sceItem': function(){
    var proId = Session.get('pro');
    var app = Processes.findOne({_id: proId}).app;
    var appIndex = Session.get('appIndex');
    var sce = app[appIndex].scenarios;
    if (sce === undefined){
      Session.set("sceIndex", 0);
    } else {
      var sceIndex = sce.findIndex(obj => obj.sceName == this.sceName);
      console.log(sceIndex);
      Session.set("sceIndex", sceIndex);
    }
  },

  'click .colSce': function(){
    $("#"+this.sceId).collapse('toggle');
  }
});

Template.scenario.helpers({
  activityItem(){
    return this.activities;
  },
});
