import { useState } from "react";
import UserSelect from "./UserSelect";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios"
import {HOST} from "../../../../HOST"
import { getAllUsers } from "../../../Redux/actions";

const EnrolUser=({courseid,setEnrolUser,courseName,user})=>{
    const users=useSelector(state=>state.allUsers)
    const dispatch=useDispatch()
    if(users.length===0){
        dispatch(getAllUsers({domain:user?.domain,token:user?.token}))
    }
    const [info,setInfo]=useState({
      courseid:Number(courseid),
      roleid:5

    })
    const handleChange=(e)=>{
 setInfo({
    ...info,
    roleid:Number(e.target.value)
 })
    }
    const handlerEnrolUser=async()=>{
        try {
            if(confirm(`Estas seguro que quieres anotar al alumno ${info.userfullname} al curso ${courseName}`)){
                const res= await axios.post(`${HOST}enrolUser`,{
                 username:user.username,
                 domain:user.domain,
                 info:{
                    roleid:info.roleid,
                    userid:info.userid,
                    courseid:info.courseid
                 }
                })
                console.log(res.data);
                if(!res.data){
                    alert("El usuario fue matriculado.")
                }
            }
            
        } catch (error) {
            alert(error.message)
        }
    }
console.log(info);

return(
    <div>
        <button onClick={()=>setEnrolUser(false)}>X</button>
        <p>{`Matricular alumno en el curso ${courseName}`}</p>
        <label>Rol: </label>
        <select onChange={handleChange}>
            <option value={5}>Alumno</option>
            <option value={3}>Profesor</option>
            <option value={4}>Profesor sin posibilidad de editar</option>
            <option value={1}>Gestor</option>
        </select>
        <div>
           <label>Usuarios: </label>
        <UserSelect setInfo={setInfo} info={info}/> 
        </div>
        <button onClick={handlerEnrolUser}>Matricular</button>
    </div>
)
}
 export default EnrolUser