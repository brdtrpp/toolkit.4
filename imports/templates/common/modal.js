// Running code only when the template has been created, BUT NOT RENDERED YET!!
Template.modal.onCreated(function() {

});

// Running code only when the template has been fully rendered
Template.modal.onRendered(function() {
  // var status = Session.get("modalStatus");
  // // console.log(status);
  // switch (status) {
  //   case "addApp":
  //     // console.log("addApp");
  //     Session.set({
  //       'formId': "insertApp",
  //       'modalTitle': "Add an Application",
  //       'formType': "update-pushArray",
  //       'formScope': "app"
  //     });
  //     break;
  //
  //   case "addSce":
  //     // console.log("addSce");
  //     var appIndex = Session.get("appIndex");
  //     var scope = "app."+appIndex+".scenarios";
  //     Session.set({
  //       'formId': "insertSce",
  //       'modalTitle': "Add a Scenario",
  //       'formType': "update-pushArray",
  //       'formScope': scope
  //     });
  //     break;
  //
  //   case "addAct":
  //     // console.log("addAct");
  //     var appIndex = Session.get("appIndex");
  //     var sceIndex = Session.get("sceIndex");
  //     var scope = "app."+appIndex+".scenarios."+sceIndex+".activities";
  //     Session.set({
  //       'formId': "insertAct",
  //       'modalTitle': "Add an Activity",
  //       'formType': "update-pushArray",
  //       'formScope': scope
  //     });
  //     break;
  //
  //   case "addSub":
  //     // console.log("addSub");
  //     var appIndex = Session.get("appIndex");
  //     var sceIndex = Session.get("sceIndex");
  //     var actIndex = Session.get("actIndex");
  //     var scope =  "app."+appIndex+".scenarios."+sceIndex+".activities."+actIndex+".subactivity";
  //     Session.set({
  //       'formId': "insertSub",
  //       'modalTitle': "Add a Subactivity",
  //       'formType': "update-pushArray",
  //       'formScope': scope
  //     });
  //     console.log(actIndex);
  //     break;
  //
  //   default:
  //     // console.log("default");
  //     Session.set({
  //       'formId': "unknownForm",
  //       'modalTitle': "unknownForm",
  //       'formType': "update-pushArray",
  //       'formScope': 'app'
  //     });
  //   }
});

// Adding events per template
Template.modal.events({

});

Template.modal.helpers({

  formId(){
    var formId = Session.get("formId");
    console.log(formId);
    return formId;
  },

  formType(){
    var formType = Session.get("formType");
    console.log(formType);
    return formType;
  },

  formScope(){
    var formScope = Session.get("formScope");
    console.log(formScope);
    return formScope;
  },

  modalTitle(){
    var modalTitle = Session.get("modalTitle");
    console.log(modalTitle);
    return modalTitle;
  },

  proId(){
    var proId = Session.get('pro');
    console.log(proId);
    return Processes.findOne({_id: proId});
  },

  processItem(){
    var proId = Session.get('pro');
    var formType = Session.get('formType');
    if(proId == undefined){
      return false;
    } else {
      return true;
    }
  },

  scoped(){
    var status = Session.get("modalStatus");
    // console.log(status);
    switch (status) {
      case "addApp":
        // console.log("addApp");
        Session.set({
          'formId': "insertApp",
          'modalTitle': "Add an Application",
          'formType': "update-pushArray",
          'formScope': "app"
        });
        break;

      case "addSce":
        // console.log("addSce");
        var appIndex = Session.get("appIndex");
        var scope = "app."+appIndex+".scenarios";
        Session.set({
          'formId': "insertSce",
          'modalTitle': "Add a Scenario",
          'formType': "update-pushArray",
          'formScope': scope
        });
        break;

      case "addAct":
        // console.log("addAct");
        var appIndex = Session.get("appIndex");
        var sceIndex = Session.get("sceIndex");
        var scope = "app."+appIndex+".scenarios."+sceIndex+".activities";
        Session.set({
          'formId': "insertAct",
          'modalTitle': "Add an Activity",
          'formType': "update-pushArray",
          'formScope': scope
        });
        break;

      case "addSub":
        // console.log("addSub");
        var appIndex = Session.get("appIndex");
        var sceIndex = Session.get("sceIndex");
        var actIndex = Session.get("actIndex");
        var scope =  "app."+appIndex+".scenarios."+sceIndex+".activities."+actIndex+".subactivity";
        Session.set({
          'formId': "insertSub",
          'modalTitle': "Add a Subactivity",
          'formType': "update-pushArray",
          'formScope': scope
        });
        console.log(actIndex);
        break;

      default:
        // console.log("default");
        Session.set({
          'formId': "unknownForm",
          'modalTitle': "unknownForm",
          'formType': "update-pushArray",
          'formScope': 'app'
        });
    }
  }

});
