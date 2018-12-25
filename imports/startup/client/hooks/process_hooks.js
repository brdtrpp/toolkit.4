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
    before:{
      "update-pushArray": function(doc){
        return doc;
      }
    },

    after: {
      "update-pushArray": function(error, result) {
      }
    },
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
});
