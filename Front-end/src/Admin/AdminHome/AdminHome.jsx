import { useNavigate } from "react-router-dom"

const AdminHome=()=>{
    const navigate=useNavigate()
    return(
    <>
    <button>USUARIOS</button>
    <button onClick={()=>navigate("/adminHome/courses")}>CURSOS</button>
    <button>REPORTES</button>
    </>
)
}
export default AdminHome