Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  action: 'action',
  where: 'client'
});


Router.route('insert_item', {
  name: 'insertItem',
  controller: 'ItemsController',
  action: 'insert',
  where: 'client'
});

Router.route('item_list', {
  name: 'itemList',
  controller: 'ItemsController',
  action: 'list',
  where: 'client'
});

Router.route('/items/:_id', {
  name: 'items:Id',
  controller: 'ItemsController',
  action: 'edit',
  where: 'client'
});

Router.onBeforeAction(function()  {
  if (!Meteor.user()) {
    this.render('AccessDenied');
  } else {
    this.next();
  }
}, {only: ['itemList','insertItem']});