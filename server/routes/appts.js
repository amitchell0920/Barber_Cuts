const express = require("express");
const Appts = require("../models/appts");
const router = new express.Router();

//Appointments routes
router.get("/appts", (req, res) => {
  Appointments.find()
    .then(foundAppts => {
      res.json(foundAppts);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/appts/:email", (req, res) => {
  Appts.findOne({ email: req.params.email })
    .then(foundAppts => {
      res.json(foundAppts);
    })
    .catch(err => {
      res.json(err);
    });
});

router.post("/appts", (req, res) => {
  let newAppts = new Appts();

  newAppts.name = req.body.name;
  newAppts.email = req.body.email;
  newAppts.phone = req.body.phone;
  newAppts.date = req.body.date;
  newAppts.time = req.body.time;
  newAppts.service = req.body.service;
  newAppts.message = req.body.message;
  newAppts.dateCreated = req.body.dateCreated;

  newAppts
    .save()
    .then(createdAppts => {
      res.json(createdAppts);
    })
    .catch(err => {
      res.json(err);
    });
});

router.put("/Appts/:id", (req, res) => {
  Appts.findOne({ _id: req.params.id })
    .then(foundAppts => {
      foundAppts.name = req.body.name;
      foundAppts.email = req.body.email;
      foundAppts.phone = req.body.phone;
      foundAppts.date = req.body.date;
      foundAppts.time = req.body.time;
      foundAppts.service = req.body.service;
      foundAppts.message = req.body.message;
      foundAppts.dateCreated = req.body.dateCreated;

      foundAppts
        .save()
        .then(updatedAppts => {
          res.json(updatedAppts);
        })
        .catch(err => {
          res.json(err);
        });
    })
    .catch(err => {
      res.json(err);
    });
});

router.delete("/Appts/:id", (req, res) => {
  Appts.remove({ _id: req.params.id })
    .then(deletedAppts => {
      res.json(deletedAppts);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
