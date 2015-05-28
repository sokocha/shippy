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
  controller: 'InsertItemController',
  action: 'action',
  where: 'client'
});

Router.route('item_list', {
  name: 'itemList',
  controller: 'ItemListController',
  action: 'action',
  where: 'client'
});

Router.route('/items/:_id', {
  name: 'items:Id',
  controller: ':IdController',
  action: 'action',
  where: 'client'
});