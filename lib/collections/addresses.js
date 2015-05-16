Addresses = new Mongo.Collection('addresses');

AddressesSchema = new SimpleSchema({
  street: {
    type: String,
    label: 'Street Address',
    max: 100
  },
  lga: {
    type: String,
    label: 'Local Government'
    allowedValue: ['Agege','Ajeromi-Ifelodun','Alimosho','Amuwo-Odofin','Apapa','Badagry','Epe','Eti-Osa','Eti-Osa East','Ibeju-Lekki','Ifako-Ijaiye','Ikeja','Ikorodu','Kosofe','Lagos Island','Lagos Mainland','Lekki Peninsula','Mushin','Ojo','Ojuwoye, Mushin','Oshodi-Isolo','Somolu','Surulere'],
    optional: false
  }
});

Addresses.attachSchema(AddressesSchema);


if (Meteor.isServer) {
  Addresses.allow({
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

  Addresses.deny({
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
