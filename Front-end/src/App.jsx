import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './login/login'
import AdminHome from './Admin/AdminHome/AdminHome'
import AdminCourses from './Admin/AdminCourses/AdminCourses'
import FirstLoginEditProfile from './firstLoginEditProfile/FirstLoginEditProfile'
import s from "./App.module.css"
import AdminCourseDetail from './Admin/AdminCourses/AdminCourseDetail'

function App() {


  return (
    <div className={s.box}>
    <Routes>
   <Route path="/" element={<Login />}/>
   <Route path="/adminHome" element={<AdminHome />}/>
   <Route path="/adminhome/courses" element={<AdminCourses />}/>
   <Route path="/firstEditProfile" element={<FirstLoginEditProfile />}/>
   <Route path="adminHome/courses/courseDetail/:id" element={<AdminCourseDetail/>}/>
   adminHome/courses/courseDetail/2
    </Routes>
    </div>
  )
}

export default App
