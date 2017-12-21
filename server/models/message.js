const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create a Saved Appointments schema
const MessageSchema = new Schema(
  {
    email: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    subject: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    time: {
      type: String,
      required: true
    },
    service: {
      type: String,
      required: true
    },
    message: {
      type: String
    },
    profileEmail: {
      type: String
    },
    profileName: {
      type: String
    },
    dateCreated: {
      type: Date,
      required: true
    },
    dateUpdated: {
      type: Date,
      required: true
    }
  },
  {
    collection: "message"
  }
);

let Messages = mongoose.model("messages", MessageSchema);

module.exports = Messages;
