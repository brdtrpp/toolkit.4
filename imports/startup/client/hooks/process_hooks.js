AutoForm.hooks({
  insertApp: {
    onSuccess: function(formType, result) {
      Bert.alert( 'Application was added!', 'success', 'growl-top-right' );
      $('#formModal').modal('hide');
    },
     onError: function(formType, error) {
       Bert.alert( 'Application was NOT added!', 'danger', 'growl-top-right' );
     },

    beginSubmit: function() {},
    endSubmit: function() {},
  },

  insertProcess: {
    onSuccess: function(formType, result) {
      Bert.alert( 'Process was added!', 'success', 'growl-top-right' );
      Session.set('processes', false);
    },
     onError: function(formType, error) {
       Bert.alert( 'Process was NOT added!', 'danger', 'growl-top-right' );
     },

    beginSubmit: function() {},
    endSubmit: function() {},
  },

  insertSce: {
    onSuccess: function(formType, result) {
      Bert.alert( 'Scenario was added!', 'success', 'growl-top-right' );
      $('#formModal').modal('hide');
    },
     onError: function(formType, error) {
       console.log(error);
       Bert.alert( 'Scenario was NOT added!', 'danger', 'growl-top-right' );
     },

    beginSubmit: function() {},
    endSubmit: function() {},
  },

  insertAct:{
    onSuccess: function(formType, result) {
      Bert.alert( 'Activity was added!', 'success', 'growl-top-right' );
      $('#formModal').modal('hide');
    },

    onError: function(formType, error) {
      console.log(error);
      Bert.alert( 'Activity was NOT added!', 'danger', 'growl-top-right' );
    },

    beginSubmit: function() {},
    endSubmit: function() {},
  },

  insertSub:{
    onSuccess: function(formType, result) {
      Bert.alert( 'Subactivity was added!', 'success', 'growl-top-right' );
      $('#formModal').modal('hide');
    },

    onError: function(formType, error) {
      console.log(error);
      Bert.alert( 'Subactivity was NOT added!', 'danger', 'growl-top-right' );
    },

    beginSubmit: function() {},
    endSubmit: function() {},
  }
});

// AutoForm.addHooks(['insertProcess', 'insertApp', 'insertSce', 'insertAct', 'insertSub'], hooksObject);
//
// var hooksObject = {
//   onSuccess: function(formType, result) {
//     Bert.alert( 'Application was added!', 'success', 'growl-top-right' );
//     $('#formModal').modal('hide');
//   },
//   onError: function(formType, error) {
//     Bert.alert( 'Application NOT was added!', 'danger', 'growl-top-right' );
//   },
//   beginSubmit: function() {},
//   endSubmit: function() {}
// };
