import { useState } from "react"
import { useParams } from "react-router-dom"

const CreateUser=({domain})=>{
    const {isSuperAdmin}=useParams()
    const[info,setInfo]=useState({
        username:"",
        password:""
    })
    const handleOnChange=(e)=>{
        setInfo({
            ...info,
            [e.target.name]:e.target.value
        })
    }
    console.log(info);
    const handleCreateUser=()=>{
        let passRegex= /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$*,-])[A-Za-z\d@#$*,-]{8,}$/;
// La contraseña debería tener al menos 8 caracter(es), al menos 1 dígito(s), al menos 1 minúscula(s), 
// al menos 1 mayúscula(s), al menos 1 caracter(es) no alfanuméricos como *,-, o #
if(!passRegex.test(info?.password)){
    alert(" La contraseña debería tener al menos 8 caracter(es), al menos 1 dígito(s), al menos 1 minúscula(s), al menos 1 mayúscula(s), al menos 1 caracter(es) no alfanuméricos como *,-, o #")
}else{

}
    }    
   
if(isSuperAdmin==="true"){
    return(
        <div>
            <label>Nombre de usuario</label>
            <input name="username" onChange={handleOnChange} value={info?.username} type="text" />
            <label>Contraseña</label>
            <input name="password" onChange={handleOnChange} value={info?.password} type="text" />
            <p>La contraseña debería tener al menos 8 caracter(es), al menos 1 dígito(s), al menos 1 minúscula(s), 
al menos 1 mayúscula(s), al menos 1 caracter(es) no alfanuméricos como *,-, o #</p>
        <button onClick={handleCreateUser}>Crear Usuario</button>
        </div>
    )
}
}
export default CreateUser