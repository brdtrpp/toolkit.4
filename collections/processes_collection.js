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

  "app.$.appName": {
    type: String,
    label: "What is the name of the Application you are adding to this Process?",
    custom(){
        let pro = Processes.findOne({_id: this.docId});
        if (pro.app == undefined) {
          app = undefined;
        } else {
          app = pro.app.find(o => o.appName === this.value);
        }
        if (app != undefined) {
          return SimpleSchema.ErrorTypes.REQUIRED;
        } else {
          return undefined;
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
    // allowedValues: ["current", "future"],
  },

  //  Scenario Rollup
  // rollup: {
  //   type: Number,
  //   autoform: {
  //     omit: true,
  //   },
  //   autoValue: function(){
  //     var sumArray = [];
  //     var sces = Activities.find({scenario: this.docId}).fetch();
  //     _.forEach(sces, function(sce){
  //       sumArray.push(sce.rollup);
  //     });
  //     function getSum(total, num){
  //       return total + num;
  //     }
  //     if (sumArray == 0) {
  //       return 0;
  //     } else {
  //       return sumArray.reduce(getSum);
  //     }
  //   }
  // },

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

  "app.$.scenarios.$.activities.$.name": {
    type: String,
    label: "What is the name of this Activity?"
  },

  "app.$.scenarios.$.activities.$.times": {
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

  "app.$.scenarios.$.activities.$.percent": {
    type: Number,
    label: "What % of the time does the occurance of this activity cause downtime?",
    min: 0,
    max: 100,
    defaultValue: 0
  },

  // rollup: {
  //   type: Number,
  //   autoform: {
  //     omit: true,
  //   },
  //   autoValue: function(){
  //     var sumArray = [];
  //     var subs = Subactivities.find({activity: this.docId}).fetch();
  //     _.forEach(subs, function(sub){
  //       sumArray.push(sub.rollup);
  //     });
  //     function getSum(total, num){
  //       return total + num;
  //     }
  //     if(!this.field('times').isSet){
  //       var actTimes = Activities.findOne(this.docId).times;
  //       var sumed = sumArray.reduce(getSum);
  //       return sumed * actTimes;
  //     } else if (sumArray == 0) {
  //       return 0;
  //     } else {
  //       var sumed = sumArray.reduce(getSum);
  //       var times = this.field('times').value;
  //       var rv = sumed * times;
  //       return rv;
  //     }
  //   }
  // },

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
  }

});

Processes.attachSchema(ProcessSchema);
