ItemsController = RouteController.extend({
  subscriptions: function () {
    this.subscribe('items', Meteor.userId()).wait();
  },

  data: function () {
    return Items.findOne({_id: this.params._id});
  },
  insert: function () {
    this.render('InsertItem', {});
  },
  list: function () {
    this.render('ItemList', {});
  },
  edit: function () {
    this.render('EditItem',{})
  }
});
