Items = new Mongo.Collection('items');


Items.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: 'Item',
    max: 200,
    optional: false
  },
  weight: {
    type: Number,
    label: 'Weight (kgs)',
    decimal: true,
    max:150,
    optional: false
  },
  photo: {
    type: String,
    label: 'Photo',
    optional: false
  },
  pickup: {
    type: AddressesSchema,
    label: "Set Pickup Location"
  },
  dropoff: {
    type: AddressesSchema,
    label: 'Set Destination'
  },
  driver: {
    type: String,
    label: 'Driver'
  },
  status: {
    type: String,
    autoValue: function (){
      if (this.isInsert) {
        return 'Not Picked Up'
      }
    },
    // denyUpdate: false,
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
