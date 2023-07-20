const express = require("express");
const profileRouter = express.Router();
const profileController = require("../Controller/profile");
profileRouter
  .post("/", profileController.createProfile)
  .get("/", profileController.getAllProfile)
  .get("/:id", profileController.getProfile)
  .put("/:id", profileController.replaceProfile)
  .patch("/:id", profileController.updateProfile)
  .delete("/:id", profileController.deleteProfile);

exports.profileRouter=profileRouter