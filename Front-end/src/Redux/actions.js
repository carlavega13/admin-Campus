
import { GET_ALL_USERS, GET_COURSES, LOGIN, PUT_USER } from "./actionTypes";
import axios from "axios"
import {HOST}from"../../HOST"

export const login=(user)=>{
    return async (dispatch)=>{
     try {
        const response=await axios.post(`${HOST}login`,user)

        return dispatch({type:LOGIN,payload:response.data})
     } catch (error) {
        alert(error.response.data)
     }
    }
}

export const getCourses=(user)=>{
return async (dispatch)=>{
try {
   const response=await axios.post(`${HOST}getCourses`,user)
   return dispatch({type:GET_COURSES,payload:response.data})
} catch (error) {
   console.log(error);
}
}
}

export const putUser=(profile)=>{

return async(dispatch)=>{
   try {
      const response=await axios.put(`${HOST}putUser`,profile)
      return dispatch({type:PUT_USER,payload:response.data})
   } catch (error) {
      console.log(error);
   }
}
}
export const getAllUsers=(info)=>{
   return async(dispatch)=>{
      try {
         const response=await axios.post(`${HOST}getAllUsers`,info)
         return dispatch({type:GET_ALL_USERS,payload:response.data})
      } catch (error) {
         console.log(error.message);
      }
   }
}