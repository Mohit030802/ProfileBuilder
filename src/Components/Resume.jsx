import React, {  useState } from 'react'
import ResumeForm from './ResumeForm'
import ResumeLayout from './ResumeLayout'
import {profileDb} from '../data/data'

const Resume = ({deleteProfile,editProfile}) => {
  
  
  const [profiled,setProfiled]=useState(profileDb)
  const [editableProfile,setEditableProfile]=useState(null);
  function onAdd(profile){
    setProfiled([{...profile,id:profiled.length+1}])
    
    
  }
  function deleteProfile(id){
    // console.log("delete")
    setProfiled(profiled.filter(profile=>profile.id!==id));
  }
  function editProfile(id){
    // console.log(id)
    setEditableProfile(profiled.find(profile=>profile.id===id))
    // console.log(profiled.find(profile=>profile.id===id))

  }

  

  
  return (
    <>
    
      <ResumeForm onAdd={onAdd} editableProfile={editableProfile}/>
      
     {
      profiled.map((profile)=>
        <ResumeLayout deleteProfile={deleteProfile} editProfile={editProfile} profile={profile} key={profile.id}/>

      )
     }
    </>
  )
}

export default Resume
