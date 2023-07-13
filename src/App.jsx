import { Route, Router, Routes } from "react-router-dom"
import Home from "./Components/Home"
import Resume from "./Components/Resume"


function App() {


  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Resume" element={<Resume />}></Route>


      </Routes>
    </>
  )
}

export default App
