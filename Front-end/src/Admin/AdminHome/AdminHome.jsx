import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const AdminHome=()=>{
    const navigate=useNavigate()
    // const dispatch=useDispatch()
    const user=useSelector(state =>state.user)
    if(!user?.phone||!user?.email){
        navigate("/firstEditProfile")
        
    }
    return(
    <>
    <button onClick={()=>navigate("/adminHome/users")}>USUARIOS</button>
    <button onClick={()=>navigate("/adminHome/courses")}>CURSOS</button>
    <button>REPORTES</button>
    </>
)
}
export default AdminHome