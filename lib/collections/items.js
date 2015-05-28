Items = new Mongo.Collection('items');


Items.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: 'Item Name',
    max: 200,
    optional: false
  },
  weight: {
    type: Number,
    label: 'Weight (kgs)',
    max:5,
    optional: false
  },
  photo: {
    type: String,
    label: 'Item Photo',
    optional: false
  },
  pickup: {
    type: AddressesSchema,
    label: "Pickup"
  },
  dropoff: {
    type: AddressesSchema,
    label: 'Dropoff'
  },
  driver: {
    type: String,
    label: 'Driver',
    optional: true,
  },
  status: {
    type: String,
    autoValue: function (){
      if (this.isInsert) {
        return 'Not Picked Up'
      }
    },
    denyUpdate: false,
    allowedValues: ['Not Picked Up','Picked Up', 'Delivered'],
    optional: false
  },
  createdBy: {
    type: String,
    autoValue: function () {
      return this.userId
    }
  }

}));



if (Meteor.isServer) {
  Items.allow({
    insert: function (userId, doc) {
      return false;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return false;
    },

    remove: function (userId, doc) {
      return false;
    }
  });

  Items.deny({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });
}
