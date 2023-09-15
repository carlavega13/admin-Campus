import { useState } from "react"

const ChangeDomain=()=>{
    
    const [domain,setDomain]=useState("")
    let urlRegex=/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/
    const handleDomain=()=>{
        if(!urlRegex.test(domain)){
        return alert("Esta URL no es valida")
        }
        
            }
 return(
    <div>

    <label>Cambiar dominio de Moodle:</label>
    <input onChange={(e)=>setDomain(e.target.value)} value={domain} type="text" placeholder="URL de Moodle" />
    <button onClick={handleDomain}>Cambiar</button>
    <p>Recordá que la URL debe ser valida para una instancia de Moodle.
        Ejemplo: "https://ejemplo.ar/moodleejemplo/"
    </p>
    </div>
 )   
}
export default ChangeDomain