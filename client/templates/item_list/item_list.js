/*****************************************************************************/
/* ItemList: Event Handlers */
/*****************************************************************************/
Template.ItemList.events({
});

/*****************************************************************************/
/* ItemList: Helpers */
/*****************************************************************************/
Template.ItemList.helpers({
  items: function() {
    return Items.find();
  },
  notPickedUp: function() {
    if (this.status === "notPickedUp")
      return true;
    else
      return false;
  },
  pickedUp: function() {
    if (this.status === "pickedUp")
      return true;
    else
      return false;
  },
  delivered: function() {
    if (this.status === 'delivered')
      return true;
    else
      return false;
  }
});

/*****************************************************************************/
/* ItemList: Lifecycle Hooks */
/*****************************************************************************/
Template.ItemList.created = function () {
};

Template.ItemList.rendered = function () {
};

Template.ItemList.destroyed = function () {
};
