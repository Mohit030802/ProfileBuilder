const model = require("../Model/profile");
const profileModels = model.profileModel;

// MVC
exports.createProfile = (req, res) => {
  // console.log(req.body)
  const smallProfile = new profileModels(req.body);
  smallProfile.save();
  // profile.push(req.body)
  res.status(201).json(req.body);
  res.json({ type: "POST" });
};
exports.getAllProfile = async (req, res) => {
  const profile = await profileModels.find({});
  res.json(profile);
};
exports.getProfile = async (req, res) => {
  const id = req.params.id;
  const profileId = await profileModels.findById(id);
  // const profileId=profile.find(p=>p.id===id);
  res.json(profileId);
};
exports.replaceProfile = async (req, res) => {
  const id = req.params.id;
  const replacedProfile = await profileModels.findOneAndReplace(
    { _id: id },
    req.body
  );
  // const profileIndex=profile.findIndex(p=>p.id===id)
  // profile.splice(profileIndex,1,{...req.body,id:id})
  res.status(202).json(replacedProfile);
  res.json({ type: "PUT" });
};
exports.updateProfile = async (req, res) => {
  const id = req.params.id;
  const updatedProfile = await profileModels.findByIdAndUpdate(
    { _id: id },
    req.body
  );
  // const profileIndex=profile.findIndex(p=>p.id===id);
  // const profileOld=profile[profileIndex]
  // profile.splice(profileIndex,1,{...profileOld,...req.body})
  res.json(202).json(updatedProfile);
  res.json({ type: "PATCH" });
};
exports.deleteProfile = async (req, res) => {
  const id = req.params.id;
  const deletedProfile = await profileModels.findOneAndDelete({ _id: id });
  // const profileIndex=profile.findIndex(p=>p.id===id);
  // profile.splice(profileIndex,1);
  res.json(200).json(deletedProfile);
  res.json({ type: "DELETE" });
};
