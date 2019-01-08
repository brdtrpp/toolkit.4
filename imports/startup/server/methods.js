Meteor.methods({
  'rollup'(id, appIndex, sceIndex, actIndex){
    console.log(id);
    var pro = Processes.findOne({_id: id});
    // console.log(appIndex);
    var act = pro.app[appIndex].scenarios[sceIndex].activities[actIndex];

    var subSum = [];
    _.map(act.subactivity, function(sub){
      subSum.push(sub.subRollup);
    });

    function getSum(total, num) {
      return total + num;
    }

    var actRollup = subSum.reduce(getSum);

    var actId = act.actId;

    Processes.update({
      _id: id,
      "app.scenarios.activities.actId" : actId
    }, {
      $set: {
        "app.$.scenarios.$.activities.$.actId": actRollup
      }
    });
  }
});
