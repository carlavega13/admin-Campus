import { useState } from "react"
import axios from "axios"
import { HOST } from "../../../../HOST"
import { useNavigate } from "react-router-dom"

const ChangeDomain=()=>{
  const navigate=useNavigate()
    
    const [domain,setDomain]=useState("")
    let urlRegex=/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/
    const [flag,setFlag]=useState(false)
    const handleDomain=async()=>{
        if(!urlRegex.test(domain)){
        return  alert("Esta URL no es valida")
        }
      if(  confirm("Seguro que quieres cambiar la URL?")){
        const res=await axios.post(`${HOST}postDomain`,domain)
if(res.data==="debe crear un usuario superAdmin para esta url"){
  setFlag(true)
alert("tu mama")
}
      }
            }
const handleCreateUser=()=>{
navigate("/adminHome/changeDomain/createUser/true")
}
 return(
    <div>

    <label>Cambiar dominio de Moodle:</label>
    <input onChange={(e)=>setDomain(e.target.value)} value={domain} type="text" placeholder="URL de Moodle" />
    <button onClick={handleDomain}>Cambiar</button>
    <p>Recordá que la URL debe ser valida para una instancia de Moodle.
        Ejemplo: "https://ejemplo.ar/moodleejemplo/"
    </p>
    {flag&&<div>
      <p>Necesitas crear un usuario SuperAdmin para esta URL de moodle</p>
      <button onClick={handleCreateUser}>Crear usuario SuperAdmin</button>
      </div>}
    </div>
 )   
}
export default ChangeDomain