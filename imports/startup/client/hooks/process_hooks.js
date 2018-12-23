AutoForm.hooks({
  insertApp: {
    onSuccess: function(formType, result) {
      Bert.alert( 'Application was added!', 'success', 'growl-top-right' );
      $('#addAppForm').collapse('hide');
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
      $('#addSce').collapse('hide');
    },
     onError: function(formType, error) {
       Bert.alert( 'Scenario was NOT added!', 'danger', 'growl-top-right' );
     },

    beginSubmit: function() {},
    endSubmit: function() {},
  },
});
