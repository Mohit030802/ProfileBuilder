import React, { useState } from 'react'
import ResumeForm from './ResumeForm'
import ResumeLayout from './ResumeLayout'
import {profileDb} from '../data/data'

const Resume = () => {
  const [profiled,setProfiled]=useState(profileDb)
  function onAdd(profile){
    setProfiled([{...profile,id:profiled.length+1}])
  }
  return (
    <>
    
      <ResumeForm onAdd={onAdd}/>
      
     {
      profiled.map((profile)=>
        <ResumeLayout profile={profile} key={profile.id}/>

      )
     }
    </>
  )
}

export default Resume
