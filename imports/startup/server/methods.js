Meteor.methods({
  'rollup'(id, appIndex, sceIndex, actIndex){
    var pro = Processes.findOne({_id: id});
    Processes.update({_id: id}, {
      $set: {
        app: pro.app
      }
    });
    Processes.update({_id: id}, {
      $set: {
        app: pro.app
      }
    });
  }
});
