
//Router configurations
Router.configure({
  layoutTemplate: 'layout',
  waitOn: function() {
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
  // find process based on id, if no process is found with id then
  // reroute to dashboard. ~BWT
  var id = this.params.id;
  var process = Processes.findOne({_id: id});
  if (process === undefined) {
    this.redirect('/processes')
  } else {
    this.render('process', {
      data: function () {
        return process;
      }
    }
  )};
},{
  name: "process",
});
