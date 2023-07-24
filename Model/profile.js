const mongoose = require("mongoose");
const { Schema } = mongoose;


// Schema

const profileSchema = new Schema({
    firstname: String,
    lastname: String,
    registration: String,
    phoneNo: Number,
    domain: String,
    langKnow: String,
    techStack: String,
    aboutme:String,
    aquote: String,
    emailAdd: String,
    linkedIn: String,
    githubId: String,
    collegeName: String,
    gradYear: Number,
    degree: String,
    cgpa: Number,
    experienceOrg: String,
    role: String,
    expFrom: Date,
    expTo: Date,
    exp: String,
  });
  // Model
exports.profileModel = mongoose.model('profileModel', profileSchema);