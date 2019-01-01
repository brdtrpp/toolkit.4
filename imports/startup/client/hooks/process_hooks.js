var hooksObject = {
  formToDoc: function(doc){
    return doc;
  },
  onSuccess: function(formType, result) {
    var modalStatus = Session.get('modalStatus');

    switch (modalStatus) {
      case "addApp":
        var item = "Application"
        break;

      case "addSce":
        var item = "Scenario"
        break;

      case "addAct":
        var item = "Activity"
        break;

      case "addSub":
        var item = "Subactivity"
        break;

      default:
        var item = "Process"
    }

    var id = Session.get("pro");
    // console.log(id);
    // var process = Processes.update({_id: id}, { $set: { updatedAt: new Date() } });
    // console.log(process);

    Bert.alert( item+' was added!', 'success', 'growl-top-right' );
    $('#formModal').modal('hide');
  },
  onError: function(formType, error) {
    var modalStatus = Session.get('modalStatus');

    switch (modalStatus) {
      case "addApp":
        var item = "Application"
        break;

      case "addSce":
        var item = "Scenario"
        break;

      case "addAct":
        var item = "Activity"
        break;

      case "addSub":
        var item = "Subactivity"
        break;

      default:
        var item = "Process"
    }

    Bert.alert( item+' NOT was added!'+error, 'danger', 'growl-top-right' );
  },
  beginSubmit: function() {},
  endSubmit: function() {}
};

AutoForm.addHooks(null, hooksObject);

// AutoForm.hooks({
//   insertApp: {
//     onSuccess: function(formType, result) {
//       Bert.alert( 'Application was added!', 'success', 'growl-top-right' );
//       $('#formModal').modal('hide');
//     },
//      onError: function(formType, error) {
//
//        Bert.alert( 'Application was NOT added!' +error, 'danger', 'growl-top-right' );
//      },
//
//     beginSubmit: function() {},
//     endSubmit: function() {},
//   },
//
//   insertProcess: {
//     onSuccess: function(formType, result) {
//       Bert.alert( 'Process was added!', 'success', 'growl-top-right' );
//       Session.set('processes', false);
//     },
//      onError: function(formType, error) {
//        Bert.alert( 'Process was NOT added!' +error, 'danger', 'growl-top-right' );
//      },
//
//     beginSubmit: function() {},
//     endSubmit: function() {},
//   },
//
//   insertSce: {
//     onSuccess: function(formType, result) {
//       Bert.alert( 'Scenario was added!', 'success', 'growl-top-right' );
//       $('#formModal').modal('hide');
//     },
//      onError: function(formType, error) {
//        console.log(error);
//        Bert.alert( 'Scenario was NOT added!' +error, 'danger', 'growl-top-right' );
//      },
//
//     beginSubmit: function() {},
//     endSubmit: function() {},
//   },
//
//   insertAct:{
//     onSuccess: function(formType, result) {
//       Bert.alert( 'Activity was added!', 'success', 'growl-top-right' );
//       $('#formModal').modal('hide');
//     },
//
//     onError: function(formType, error) {
//       console.log(error);
//       Bert.alert( 'Activity was NOT added!' +error, 'danger', 'growl-top-right' );
//     },
//
//     beginSubmit: function() {},
//     endSubmit: function() {},
//   },
//
//   insertSub:{
//     before: {
//       "update-pushArray": function(doc) {
//         console.log(doc);
//         return doc
//       }
//     },
//     onSuccess: function(formType, result) {
//       Bert.alert( 'Subactivity was added!', 'success', 'growl-top-right' );
//       $('#formModal').modal('hide');
//     },
//
//     onError: function(formType, error) {
//       console.log(error);
//       Bert.alert( 'Subactivity was NOT added!'+error, 'danger', 'growl-top-right' );
//     },
//
//     beginSubmit: function() {},
//     endSubmit: function() {},
//   }
// });
