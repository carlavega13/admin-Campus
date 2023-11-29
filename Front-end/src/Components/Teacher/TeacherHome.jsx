import { useDispatch } from "react-redux"
import { logOut } from "../../Redux/actions"
import { useNavigate } from "react-router-dom"

const TeacherHome=()=>{
    const dispatch=useDispatch()
    const navigate=useNavigate()
    return(
        <div>
            <button onClick={()=>{
                dispatch(logOut())
                navigate("/")
            }}>Log Out</button>
            fedsdsad
        </div>
    )
}
export default TeacherHome