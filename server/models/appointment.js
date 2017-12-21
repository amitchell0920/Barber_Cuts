const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create a Saved Appointments schema
const AppointmentSchema = new Schema(
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
    collection: "appointments"
  }
);

let Appointments = mongoose.model("appointments", AppointmentSchema);

module.exports = Appointments;
