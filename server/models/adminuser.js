const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create a Saved Profile schema
const AdminuserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      index: { unique: true }
    },
    password: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    role: {
      type: String
    }
  },

  {
    collection: "users"
  }
);

let Adminusers = mongoose.model("adminusers", AdminuserSchema);

module.exports = Adminusers;
