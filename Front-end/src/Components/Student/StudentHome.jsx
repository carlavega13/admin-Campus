import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import setting from "../../public/images/AdminHome/setting.png"
import { putHome } from "../../Redux/actions"
import EditProfile from "../EditProfile/EditProfile"
import { useEffect } from "react"
import FirstLoginEditProfile from "../FirstLoginEditProfile/FirstLoginEditProfile"
import selectSetting from "../../public/images/AdminHome/select_setting.png"

const StudentHome=()=>{
    const navigate = useNavigate()
    const dispatch=useDispatch()
    const user = useSelector(state => state.user)
    const value=useSelector(state=>state.homeValue)
 if(!user.firstname||!user.phone){
    return <div>
        LOADING...
    </div>
 }

return(
    <div>
  <p>{`${user?.firstname[0].toUpperCase()}${user?.firstname.slice(1)} ${user?.lastname[0].toUpperCase()}${user?.lastname.slice(1)} `}</p>
  <img style={{width:"2rem"}}  onClick={()=>dispatch(putHome("editProfile"))}  src={value==="editProfile"?selectSetting:setting} />
  {
      value === "editProfile"
      ? <EditProfile/>
      : null
    }
    </div>
)
}
export default StudentHome