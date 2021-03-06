import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);
Processes = new Mongo.Collection("processes");
import { Random } from 'meteor/random';

if (Meteor.isServer) {
 Meteor.publish('processes', function() {
   return Processes.find();
  });
}

// Define the schema for processes
ProcessSchema = new SimpleSchema({
  // owner: {
  //   type: OwnerSchema,
  //   autoform: {
  //     omit: true,
  //   }
  // },
  createdAt: {
    type: Date,
    autoform: {
      omit: true,
    },
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date()};
      } else {
        this.unset();  // Prevent user from supplying their own value
      }
    }
  },

  updatedAt: {
    type: Date,
    autoValue: function() {
      if (this.isUpdate) {
        return new Date();
      }
    },
    autoform: {
      omit: true,
    },
    denyInsert: true,
    optional: true
  },

  name: {
    type: String,
    label: "What is the name of the process under review?",
    index: true,
    unique: true,
    max: 75
  },

  description: {
    type: String,
    label: "A short description of the process.",
    max: 400,
    autoform: {
      rows: 3
    }
  },

    timeperiod: {
      type: Object,
      label: "What is the time period under review?",
    },

    'timeperiod.duration': Number,
    "timeperiod.type": {
      type: String,
      autoform: {
        options: {
          hour: "Hours",
          day: "Days",
          week: "Weeks",
          month: "Months",
          year: "Years"
        }
      }
    },

    "timeperiod.time": Number,

    downtime: {
      type: Number,
      label: "What is the downtime cost for this process? (in $/hr)",
      min: 0
    },


  // Application Schema
  app: {
    type: Array,
    label: "What applications are in this Process?",
    optional: true,
    autoform: {
      omit: true,
    }
  },

  "app.$":{
    label: "Application",
    type: Object
  },

  "app.$.appId":{
    type: String,
    autoValue: function(){
      var key = Random.id(10);
      return key;
    },
    autoform: {
      omit: true,
    },
  },

  "app.$.appName": {
    type: String,
    label: "What is the name of the Application you are adding to this Process?",
    custom(){
      if (Meteor.isClient && this.isSet) {
        var proId = Session.get('pro');
        let pro = Processes.findOne({_id: proId});
        if (pro.app == undefined) {
          app = undefined;
        } else {
          app = _.findWhere(pro.app, {appName: this.value});
        };
        if (app != undefined) {
          return SimpleSchema.ErrorTypes.REQUIRED;
        } else {
          return undefined;
        }
      }
    }
  },

  // Scenario Schema

  "app.$.scenarios": {
    type: Array,
    label: "What applications are in this Process?",
    optional: true,
    autoform: {
      omit: true,
    }
  },

  "app.$.scenarios.$": {
    type: Object
  },

  "app.$.scenarios.$.sceId":{
    type: String,
    autoValue: function(){
      var key = Random.id(10);
      return key;
    },
    autoform: {
      omit: true,
    },
  },

  "app.$.scenarios.$.sceName": {
    type: String,
    label: "What is this name of scenario?"
  },

  "app.$.scenarios.$.sceDescription": {
    type: String,
    label: "A short description of the scenario.",
    max: 400,
    autoform: {
      rows: 3
    }
  },

  "app.$.scenarios.$.sceState": {
    type: String,
    label: "Is this a current scenario or a proposed one?"
    // allowedValues: ["current", "future"],
  },

  //  Scenario Rollup
  "app.$.scenarios.$.sceRollup": {
    type: Number,
    autoform: {
      omit: true,
    },
    autoValue: function(){
      var sumArray = [];
      var sces = this.siblingField("activities").value;
      _.forEach(sces, function(sce){
        sumArray.push(sce.actRollup);
      });
      function getSum(total, num){
        return total + num;
      }

      function round(value, decimals) {
        return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
      }

      if (sumArray == 0) {
        return 0;
      } else {
        var sumReturn = sumArray.reduce(getSum);
        return round(sumReturn, 2);
      }
    }
  },

  "app.$.scenarios.$.activities": {
    type: Array,
    label: "What activities are in this scenario?",
    optional: true,
    autoform: {
      omit: true,
    }
  },

  "app.$.scenarios.$.activities.$": {
    type: Object
  },

  "app.$.scenarios.$.activities.$.actId":{
    type: String,
    autoValue: function(){
      var key = Random.id(10);
      return key;
    },
    autoform: {
      omit: true,
    },
  },

  "app.$.scenarios.$.activities.$.actName": {
    type: String,
    label: "What is the name of this Activity?"
  },

  "app.$.scenarios.$.activities.$.actDescription": {
    type: String,
    label: "A short description of the scenario.",
    max: 400,
    autoform: {
      rows: 3
    }
  },

  "app.$.scenarios.$.activities.$.actTimes": {
    type: Number,
    // label: function(){
    //   if(Meteor.isClient && !this.isSet){
    //     var pro = Session.get('process');
    //     var process = Processes.findOne(pro);
    //     if (process == undefined) {
    //       return "wait"
    //     } else {
    //       var timeNum = process.timeperiod.duration;
    //       var timeType = process.timeperiod.type;
    //       var res = "What is the number of times this activity occurs per " + timeNum + " " + timeType + "?";
    //       return res;
    //     }
    //   }
    // }
  },

  "app.$.scenarios.$.activities.$.actPercent": {
    type: Number,
    label: "What % of the time does the occurance of this activity cause downtime?",
    min: 0,
    max: 100,
    defaultValue: 0
  },

  "app.$.scenarios.$.activities.$.actRollup": {
    type: Number,
    autoform: {
      omit: true,
    },
    autoValue: function(){
      const subs = this.siblingField("subactivity").value;
      var subSum = [];
      _.map(subs, function(sub){
        subSum.push(sub.subRollup);
      });

      function getSum(total, num) {
        return total + num;
      }

      function round(value, decimals) {
        return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
      }


      if( subSum.length == 0 ){
        return 0;
      } else {
        var actRollup = subSum.reduce(getSum);
        return round(actRollup, 2);
      }

    }
  },

  "app.$.scenarios.$.activities.$.subactivity": {
    type: Array,
    label: "What activities are in this scenario?",
    optional: true,
    autoform: {
      omit: true,
    }
  },

  "app.$.scenarios.$.activities.$.subactivity.$": {
    type: Object
  },

  "app.$.scenarios.$.activities.$.subactivity.$.subId":{
    type: String,
    autoValue: function(){
      var key = Random.id(10);
      return key;
    },
    autoform: {
      omit: true,
    },
  },

  "app.$.scenarios.$.activities.$.subactivity.$.subName": {
    type: String,
    label: "What are the names of the subactivities that make up the parent activity?"
  },

  "app.$.scenarios.$.activities.$.subactivity.$.duration": {
    type: Number,
    label: "How Long Does it take?",
    defaultValue: 0,
  },

  "app.$.scenarios.$.activities.$.subactivity.$.downtime": {
    type: Boolean,
    label: "Do the minutes contribute to Downtime?",
    autoform: {
      afFieldInput: {
        type: "boolean-radios",
      }
    },
    defaultValue: false,
  },

  "app.$.scenarios.$.activities.$.subactivity.$.rate": {
    type: Number,
    label: "Labor Rate $/hr",
    defaultValue: 0,
  },

  "app.$.scenarios.$.activities.$.subactivity.$.people": {
    type: Number,
    label: "Number of People",
    defaultValue: 0,
  },

  "app.$.scenarios.$.activities.$.subactivity.$.consumable": {
    type: Number,
    label: "Consumables Cost",
    defaultValue: 0,
  },

  "app.$.scenarios.$.activities.$.subactivity.$.itemCost": {
    type: Number,
    label: "Cost of Items",
    defaultValue: 0,
  },

  "app.$.scenarios.$.activities.$.subactivity.$.itemNum": {
    type: Number,
    label: "Number of Items",
    defaultValue: 0,
  },

  "app.$.scenarios.$.activities.$.subactivity.$.subRollup": {
    type: Number,
    autoform: {
      omit: true,
    },
    autoValue: function(){
      var pro = Processes.findOne({_id: this.docId});
      var itemNum = this.siblingField('itemNum').value;
      var itemCost = this.siblingField('itemCost').value;
      var consumable = this.siblingField('consumable').value;
      var duration = this.siblingField('duration').value;
      var rate = this.siblingField('rate').value;
      var people = this.siblingField('people').value;
      var downtime = this.siblingField('downtime').value;

      function round(value, decimals) {
        return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
      }

      if (downtime){
        let subRollup = (( itemNum * itemCost ) + consumable + (( duration / 60 ) * ( rate * people )) + (( duration / 60 ) * pro.downtime ));
        return round(subRollup, 2);
      } else {
        let subRollup = (( itemNum * itemCost ) + consumable + (( duration / 60 ) * ( rate * people )));
        return round(subRollup, 2);
      }
    }
  },

});

Processes.attachSchema(ProcessSchema);
