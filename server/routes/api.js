const express = require("express");
const Profile = require("../models/profile");
const Appointment = require("../models/appointment");
const Adminuser = require("../models/adminuser");
const Message = require("../models/message");

const router = new express.Router();

//Dashboard Routes
router.get("/dashboard", (req, res) => {
  res.status(200).json({
    message: "Welcome to Teamcarzy Cuts"
  });
});

//Profile Routes
router.get("/profiles", (req, res) => {
  Profile.find()
    .then(foundProfiles => {
      console.log("foundProfiles");
      res.json(foundProfiles);
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

router.get("/profiles/:id", (req, res) => {
  Profile.findOne({ _id: req.params.id })
    .then(foundProfile => {
      res.json(foundProfile);
    })
    .catch(err => {
      res.json(err);
    });
});

router.put("/profiles/:id", (req, res) => {
  console.log("put called here");
  Profile.findOne({ _id: req.params.id })
    .then(foundProfile => {
      console.log(foundProfile);

      foundProfile.name = req.body.name;
      foundProfile.email = req.body.email;
      foundProfile.address = req.body.address;
      foundProfile.city = req.body.city;
      foundProfile.state = req.body.state;
      foundProfile.zip = req.body.zip;
      foundProfile.businessName = req.body.businessName;
      foundProfile.wsite = req.body.wsite;
      foundProfile.pimage = req.body.pimage || foundProfile.pimage;
      foundProfile.image = req.body.image || foundProfile.image;
      foundProfile.dateUpdated = new Date();
      console.log(foundProfile);

      foundProfile
        .save()
        .then(updatedProfile => {
          res.json(updatedProfile);
        })
        .catch(err => {
          res.json(err);
        });
    })
    .catch(err => {
      res.json(err);
    });
});

router.post("/profiles", (req, res) => {
  console.log("post called here");
  let newProfile = new Profile();

  newProfile.name = req.body.name;
  newProfile.email = req.body.email;
  newProfile.address = req.body.address;
  newProfile.city = req.body.city;
  newProfile.state = req.body.state;
  newProfile.zip = req.body.zip;
  newProfile.businessName = req.body.businessName;
  newProfile.wsite = req.body.wsite;
  newProfile.pimage = req.body.pimage;
  newProfile.image = req.body.image;
  newProfile.dateCreated = new Date();
  newProfile.dateUpdated = new Date();

  newProfile
    .save()
    .then(createdProfile => {
      res.json(createdProfile);
    })
    .catch(err => {
      res.json(err);
    });
});

router.delete("/profiles/:id", (req, res) => {
  Profile.remove({ _id: req.params.id })
    .then(deletedProfile => {
      res.json(deletedProfile);
    })
    .catch(err => {
      res.json(err);
    });
});

//Appt Routes
router.get("/appointments/add/:email", (req, res) => {
  console.log("get appt contact called here");
  Appointment.aggregate([
    {
      $match: {
        email: req.params.email,
        date: req.body.date,
        time: req.body.time
      }
    }])
    .then(foundAppointments => {
      console.log(foundAppointments);
      res.json(foundAppointments);
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

router.get("/appointments/:profileEmail", (req, res) => {
  Appointment.aggregate([{ $match: { profileEmail: req.params.profileEmail } }])
    .then(foundAppointments => {
      res.json(foundAppointments);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("appointments/edit/appointmentId/:appointmentId", (req, res) => {
  Appointment.findOne({ _id: req.params.appointmentId })
    .then(foundAppointment => {
      res.json(foundAppointment);
    })
    .catch(err => {
      res.json(err);
    });
});

router.put("/appointments/:id", (req, res) => {
  console.log("put appointent called here");
  Appointment.findOne({ _id: req.params.id })
    .then(foundAppointment => {
      console.log(foundAppointment);

      foundAppointment.name = req.body.name;
      foundAppointment.email = req.body.email;
      foundAppointment.phone = req.body.phone;
      foundAppointment.date = req.body.date;
      foundAppointment.time = req.body.time;
      foundAppointment.service = req.body.service;
      foundAppointment.message = req.body.message;
      foundAppointment.profileEmail = req.body.profileEmail;
      foundAppointment.profileName = req.body.profileName;
      foundAppointment.dateUpdated = new Date();
      console.log(foundAppointment);

      foundAppointment
        .save()
        .then(updatedAppointment => {
          res.json(updatedAppointment);
        })
        .catch(err => {
          res.json(err);
        });
    })
    .catch(err => {
      res.json(err);
    });
});

router.delete("/appointments/:id", (req, res) => {
  Appointment.remove({ _id: req.params.id })
    .then(deletedAppointment => {
      res.json(deletedAppointment);
    })
    .catch(err => {
      res.json(err);
    });
});

//Not Used
// router.get("/appointments/:profileEmail", (req, res) => {
//   Appointments.find([{ $match: { profileEmail: req.params.profileEmail } }])
//     .then(foundAppointments => {
//       res.json(foundAppointments);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

router.post("/appointments", (req, res) => {
  console.log("post called here");
  let newAppointment = new Appointment();

  newAppointment.name = req.body.name;
  newAppointment.email = req.body.email;
  newAppointment.phone = req.body.phone;
  newAppointment.date = req.body.date;
  newAppointment.time = req.body.time;
  newAppointment.service = req.body.service;
  newAppointment.message = req.body.message;
  newAppointment.profileId = req.body.profileId;
  newAppointment.profileName = req.body.profileName;
  newAppointment.profileEmail = req.body.profileEmail;
  newAppointment.dateCreated = new Date();
  newAppointment.dateUpdated = new Date();

  newAppointment
    .save()
    .then(createdAppointment => {
      res.json(createdAppointment);
    })
    .catch(err => {
      res.json(err);
    });
});

router.post("/sendMessage", (req, res) => {
  console.log("post message called here");
  let newMessage = new Message();

  newMessage.name = req.body.name;
  newMessage.email = req.body.email;
  newMessage.phone = req.body.phone;
  newMessage.date = req.body.date;
  newMessage.time = req.body.time;
  newMessage.service = req.body.service;
  newMessage.message = req.body.message;
  newMessage.profileId = req.body.profileId;
  newMessage.profileName = req.body.profileName;
  newMessage.profileEmail = req.body.profileEmail;
  newMessage.dateCreated = new Date();
  newMessage.dateUpdated = new Date();

  newMessage
    .then(createdMessage => {
      res.json(createdMessage);
    })
    .then(() => {
      console.log("MESSAGE SAVED TO DB");
    })
    .catch(err => {
      console.log("MESSAGE ERROR");
      res.json(err);
    });
});

//User Requests
router.get("/adminusers", (req, res, next) => {
  Adminuser.find()
    .then(foundUsers => {
      console.log("foundUsers");
      res.json(foundUsers);
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

router.get("/adminusers/:userEmail", (req, res) => {
  Appointment.aggregate([{ $match: { userEmail: req.params.userEmail } }])
    .then(foundUser => {
      res.json(foundUser);
    })
    .catch(err => {
      res.json(err);
    });
});

router.delete("/adminusers/delete/:id", (req, res) => {
  Adminuser.remove({ _id: req.params.id })
    .then(deletedUser => {
      res.json(deletedUser);
    })
    .catch(err => {
      res.json(err);
    });
});

router.put("/adminusers/update/:id", (req, res) => {
  console.log("put admusers called here");
  Adminuser.findOne({ _id: req.params.id })
    .then(foundUser => {
      console.log(foundUser);
      console.log(req.params.id);

      foundUser.name = req.body.name;
      foundUser.email = req.body.email;
      foundUser.password = foundUser.password;
      foundUser.role = req.body.role;
      console.log(foundUser);

      foundUser
        .save()
        .then(updatedUser => {
          res.json(updatedUser);
        })
        .catch(err => {
          res.json(err);
        });
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
