const fs = require("fs");
const express = require("express");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const profile = data.profile;
// MVC
exports.createProfile=(req,res)=>{
    // console.log(req.body)
    profile.push(req.body)
    res.status(201).json(req.body)
    res.json({type:'POST'})
}
exports.getAllProfile=(req,res)=>{
    res.send(profile)
}
exports.getProfile=(req,res)=>{
    
    const id=+req.params.id;
    const profileId=profile.find(p=>p.id===id);
    res.send(profileId)
}
exports.replaceProfile=(req,res)=>{
    const id = +req.params.id;
    const profileIndex=profile.findIndex(p=>p.id===id)
    profile.splice(profileIndex,1,{...req.body,id:id})
    res.status(202).json()
    res.json({type:'PUT'})
}
exports.updateProfile=(req,res)=>{
    const id= +req.params.id;
    const profileIndex=profile.findIndex(p=>p.id===id);
    const profileOld=profile[profileIndex]
    profile.splice(profileIndex,1,{...profileOld,...req.body})
    res.json(202).json();
    res.json({type:'PATCH'})
}
exports.deleteProfile=(req,res)=>{
    const id= +req.params.id;
    const profileIndex=profile.findIndex(p=>p.id===id);
    profile.splice(profileIndex,1);
    res.json(200).json("Deleted")
    res.json({type:'DELETE'})
}