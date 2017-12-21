const express = require("express");
const Profile = require("../models/profile");
const router = new express.Router();

//Profile routes
router.get("/profiles", (req, res) => {
  Profile.find()
    .then(foundProfiles => {
      res.json(foundProfiles);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/profiles/:email", (req, res) => {
  Profile.findOne({ email: req.params.email })
    .then(foundProfile => {
      res.json(foundProfile);
    })
    .catch(err => {
      res.json(err);
    });
});

router.post("/profiles", (req, res) => {
  let newProfile = new Profile();

  newProfile.name = req.body.name;
  newProfile.email = req.body.email;
  newProfile.address = req.body.address;
  newProfile.city = req.body.city;
  newProfile.state = req.body.state;
  newProfile.zip = req.body.zip;
  newProfile.businessName = req.body.businessName;
  newProfile.wsite = req.body.wsite;
  newProfile.image = req.body.image;
  newProfile.dateCreated = new Date();

  newProfile
    .save()
    .then(createdProfile => {
      res.json(createdProfile);
    })
    .catch(err => {
      res.json(err);
    });
});

router.post("/profiles/:id", (req, res) => {
  Profile.findOne({ _id: req.params.id })
    .then(foundProfile => {
      foundProfile.name = req.body.name;
      foundProfile.email = req.body.email;
      foundProfile.address = req.body.address;
      foundProfile.city = req.body.city;
      foundProfile.state = req.body.state;
      foundProfile.zip = req.body.zip;
      foundProfile.businessName = req.body.businessName;
      foundProfile.wsite = req.body.wsite;
      foundProfile.pimage = req.body.pimage;
      foundProfile.image = req.body.image;
      foundProfile.dateCreated = req.body.dateCreated;

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

router.delete("/profiles/:_id", (req, res) => {
  Profile.remove({ _id: req.params.id })
    .then(deletedProfile => {
      res.json(deletedProfile);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
