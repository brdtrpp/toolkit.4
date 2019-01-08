Meteor.methods({
  'rollup'(id, appIndex, sceIndex, actIndex){
    var pro = Processes.findOne({_id: id});
    // var act = pro.app[appIndex].scenarios[sceIndex].activities[actIndex];
    //
    // var subSum = [];
    // _.map(act.subactivity, function(sub){
    //   subSum.push(sub.subRollup);
    // });
    //
    // function getSum(total, num) {
    //   return total + num;
    // }
    //
    // var actRollup = subSum.reduce(getSum);
    //
    // var actId = act.actId;
    // console.log(pro.app);
    Processes.update({_id: id}, {
      $set: {
        app: pro.app
      }
    });
  }
});
