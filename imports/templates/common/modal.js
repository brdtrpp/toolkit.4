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

  formScope(){
    var status = Session.get("modalStatus");
    switch (status) {
        case "app":
          Session.set('formId', "insertApp");
          Session.set('modalTitle', "Add an Application");
          return "app";
        case "sce":
          Session.set('formId', "insertSce");
          Session.set('modalTitle', "Add a Scenario");
          return "app.0.scenarios";
        case "act":
          Session.set('formId', "insertAct");
          Session.set('modalTitle', "Add an Activity");
          return "app.0.scenarios.0.activities";
        case "sub":
          Session.set('formId', "insertSub");
          Session.set('modalTitle', "Add a Subactivity");
          return "app.0.scenarios.0.activities.0.subactivity";
        default:
          Session.set('formId', "unkownForm");
          Session.set('modalTitle', "unkownForm");
          return "app";
    }
  },

  formId(){
    var formId = Session.get("formId");
    return formId;
  },

  modalTitle(){
    var modalTitle = Session.get("modalTitle");
    return modalTitle;
  },

  proId(){
    var proId = Session.get('pro');
    return Processes.findOne({_id: proId});
  },

  processItem(){
    var proId = Session.get('pro');
    if(!proId){
      return false;
    } else{
      return true;
    }
  }

});
