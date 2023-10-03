import { useState } from "react"
import axios from "axios"
import { HOST } from "../../../../HOST"
import { useSelector } from "react-redux"
const CreateCourse=()=>{
    const [info,setInfo]=useState({
        fullname:"",
        shortname:"",
        categoryid:"1"
    })
    const{domain,username}=useSelector(state=>state.user)
    const handleChange=(e)=>{
        setInfo({
            ...info,
            [e.target.name]:e.target.value
    
        })
    }
 const handleSubmit=async()=>{
    try {
        if(confirm(`Estas seguro que quieres crear el curso: ${info?.fullname}? `)){
        const res=await axios.post(`${HOST}postCourse`,{domain,username,info:info})
        if(res.data.errorcode){
          return  alert(`Hubo un error: ${res.data.message}`)
        }
        if(res.data[0].id){
           return alert("Su curso se creo correctamente")
        }
        }
        
    } catch (error) {
        console.log(error.message);
        alert(error.message)
    }
 }
return(<div>
<label htmlFor="">Nombre del curso</label>
<input onChange={handleChange} value={info?.fullname} name="fullname" type="text" placeholder="Nombre del curso" /> 
<label htmlFor="">Nombre corto</label>
<input onChange={handleChange} value={info?.shortname} name="shortname" type="text" placeholder="Nombre corto" />
<label htmlFor="">Categoria ID (default 1) </label>
<input onChange={handleChange} value={info?.categoryid} type="number"  name="categoryid" placeholder="Categoria ID"/>
<button onClick={handleSubmit}>Crear curso</button>
</div>)
}
export default CreateCourse