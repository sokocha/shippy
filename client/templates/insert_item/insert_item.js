/*****************************************************************************/
/* InsertItem: Event Handlers */
/*****************************************************************************/
Template.InsertItem.events({
});

/*****************************************************************************/
/* InsertItem: Helpers */
/*****************************************************************************/
Template.InsertItem.helpers({
});

/*****************************************************************************/
/* InsertItem: Lifecycle Hooks */
/*****************************************************************************/
Template.InsertItem.created = function () {
};

Template.InsertItem.rendered = function () {
};

Template.InsertItem.destroyed = function () {
};

AutoForm.addHooks(null, function () {
  return Router.go('itemList');
});
