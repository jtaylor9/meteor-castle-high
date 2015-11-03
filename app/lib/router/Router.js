/**
 * Configure Iron Router.
 * See: http://iron-meteor.github.io/iron-router/
 */


Router.configure({
  layoutTemplate: 'Layout',
  waitOn: function() { return Meteor.subscribe("Stuff"); },
  loadingTemplate: 'Loading'
});

Router.route('/Home', {
  name: 'Home'
});

Router.route('/list', {
  name: 'ListStuff'
});

Router.route('/add', {
  name: 'AddStuff'
});

Router.route('/StudentParents', {
  name: 'StudentParents'
});

Router.route('/ContactUs', {
  name: 'ContactUs'
});

Router.route('/AlumniFriends', {
  name: 'AlumniFriends'
});

Router.route('/FacultyStaff', {
  name: 'FacultyStaff'
});

Router.route('/stuff/:_id', {
  name: 'EditStuff',
  data: function() { return Stuff.findOne(this.params._id); }
});
