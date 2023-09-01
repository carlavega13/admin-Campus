import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './login/login'
import AdminHome from './Admin/AdminHome/AdminHome'
import AdminCourses from './Admin/AdminCourses/AdminCourses'
import FirstLoginEditProfile from './firstLoginEditProfile/FirstLoginEditProfile'
import s from "./App.module.css"

function App() {


  return (
    <div className={s.box}>
    <Routes>
   <Route path="/" element={<Login />}/>
   <Route path="/adminHome" element={<AdminHome />}/>
   <Route path="/adminhome/courses" element={<AdminCourses />}/>
   <Route path="/firstEditProfile" element={<FirstLoginEditProfile />}/>
    </Routes>
    </div>
  )
}

export default App
