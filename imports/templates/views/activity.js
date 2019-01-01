// Running code only when the template has been created, BUT NOT RENDERED YET!!
Template.activity.onCreated = function() {

};

// Running code only when the template has been fully rendered
Template.activity.onRendered = function() {

};

// Adding events per template
Template.activity.events({
  'click .addSub': function(){
    Session.set('modalStatus', "addSub");
  },

  'click .act': function(){
    var proId = Session.get('pro');
    var pro = Processes.findOne({_id: proId});
    var appIndex = Session.get('appIndex');
    var sceIndex = Session.get('sceIndex');

    var act = pro.app[appIndex].scenarios[sceIndex].activities;
    if (act === undefined){
      Session.set("actIndex", 0);
    } else {
      var actIndex = act.findIndex(obj => obj.actName == this.actName);
      console.log(actIndex);
      Session.set("actIndex", actIndex);
    }
  }
});

Template.activity.helpers({
  subactivityItem(){
    return this.subactivity;
  }
});
