// Running code only when the template has been created, BUT NOT RENDERED YET!!
Template.scenario.onCreated = function() {

};

// Running code only when the template has been fully rendered
Template.scenario.onRendered = function() {

};

// Adding events per template
Template.scenario.events({
  'click .act': function(){
    // var proId = Session.get('pro');
    // var appId = Session.get("appId");
    //
    // var pro = Processes.findOne({_id: proId});
    // var app = _.findWhere(pro.app, {appName: appId}).scenarios;
    // var sceName = this.sceName;
    // var sce = _.indexOf(app, {sceName: sceName});
    // console.log(sceName);
    // console.log(sce);

    Session.set('modalStatus', "act");
  },
});

Template.scenario.helpers({
  activityItem(){
    return this.activities;
  },
});
