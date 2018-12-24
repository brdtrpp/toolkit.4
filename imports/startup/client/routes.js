
//Router configurations
Router.configure({
  layoutTemplate: 'layout',
  subscriptions: function() {
    // returning a subscription handle or an array of subscription handles
    // adds them to the wait list.
    return Meteor.subscribe('processes');
  },
});

Router.route('/', function () {
    this.render('dashboard');
  }, {
    name: 'dashboard'
});


Router.route('/processes', function () {
    this.render('processes');
  }, {
    name: 'processes'
});

Router.route('/process/:id', function() {
  var id = this.params.id;
  this.render('process', {
    data: function () {
      return Processes.findOne({_id: id});
    }
  });
},{
  name: "process",
});
