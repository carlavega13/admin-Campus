import { useDispatch, useSelector } from "react-redux"
import UserSelect from "../AdminCourses/UserSelect"
import { getAllUsers } from "../../../Redux/actions"
import { useState } from "react"
import axios from "axios"
import { HOST } from "../../../../HOST"


const ChangeRoles=(props)=>{

    const dispatch=useDispatch()
    const allUsers=useSelector(state=>state.allUsers)
    const [info, setInfo] = useState({ });
    if(allUsers.length===0){
      dispatch(getAllUsers({domain:props.user.domain,token:props.user.token}))
    }
    const handleChange=(e)=>{
      setInfo({
        ...info,
        rol:e.target.value
      })
    }
    console.log(info);
    const handleSend=async()=>{
      if(!info.rol){
       return alert("debes seleccionar todos los campos")
      }
      if(!info.userid){
       return alert("debes seleccionar todos los campos")
      }
      const res=await axios.post(`${HOST}changeRol`,info)
    }
return(
    <div>
        <label>Usuario: </label>
    <UserSelect info={info}setInfo={setInfo}/>
    <label>Rol: </label>
          <select onChange={handleChange}>
            <option value={"estudiante"} style={{ background: "#D9D9D9" }}>
              Alumno
            </option>
            <option value={"profesor"} style={{ background: "#EAEAEA" }}>
              Profesor
            </option>
            <option value={"administrador"} style={{ background: "#D9D9D9" }}>
            Administrador
            </option>
          </select>
          <button onClick={handleSend}>Cambiar rol</button>
    </div>
)
}
export default ChangeRoles