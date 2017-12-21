const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create a Saved Profile schema
const ProfileSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    zip: {
      type: Number,
      required: true
    },
    businessName: {
      type: String,
      required: true
    },
    wsite: {
      type: String,
      required: true
    },
    dateCreated: {
      type: Date,
      required: true
    },
    dateUpdated: {
      type: Date,
      required: true
    },
    pimage: {
      type: String,
      required: true,
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlBSa-v17oI7KsO1joLXKV58QcLY0fmE4LTUk4bVzugnJe4WXN"
    },
    image: {
      type: [],
      required: true,
      default:
        "http://media.gettyimages.com/photos/closeup-of-barber-sign-outside-barber-shop-picture-id539632449?s=612x612"
    }
  },

  {
    collection: "profiles"
  }
);

let Profiles = mongoose.model("profiles", ProfileSchema);

module.exports = Profiles;
