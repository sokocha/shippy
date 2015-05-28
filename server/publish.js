/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */
 Meteor.publish('items', function(userId) {
  return Items.find({createdBy: userId});
 });
