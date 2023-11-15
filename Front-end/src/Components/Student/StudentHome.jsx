import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import iconSettings from "../../public/images/AdminHome/settings.png"
import { putHome } from "../../Redux/actions"
import EditProfile from "../EditProfile/EditProfile"
import { useEffect } from "react"
import FirstLoginEditProfile from "../FirstLoginEditProfile/FirstLoginEditProfile"
const StudentHome=()=>{
    const navigate = useNavigate()
    const dispatch=useDispatch()
    const user = useSelector(state => state.user)
    const value=useSelector(state=>state.homeValue)
 if(!user.firstname||!user.phone){
    console.log(user.firstname,user.phone);
    return <div>
        LOADING...
    </div>
 }

return(
    <div>
  <p>{`${user?.firstname[0].toUpperCase()}${user?.firstname.slice(1)} ${user?.lastname[0].toUpperCase()}${user?.lastname.slice(1)} `}</p>
  <img onClick={()=>dispatch(putHome("editProfile"))}  src={iconSettings} />
  {
      value === "editProfile"
      ? <EditProfile/>
      : null
    }
    </div>
)
}
export default StudentHome