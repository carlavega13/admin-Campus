import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './login/login'
import AdminHome from './Admin/AdminHome/AdminHome'
import AdminCourses from './Admin/AdminCourses/AdminCourses'

function App() {


  return (
    <>
    <Routes>
   <Route path="/" element={<Login />}/>
   <Route path="/adminHome" element={<AdminHome />}/>
   <Route path="/Adminhome/courses" element={<AdminCourses />}/>
   
    </Routes>
    </>
  )
}

export default App
