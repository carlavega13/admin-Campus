import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import AdminCourses from '../AdminCourses/AdminCourses.jsx'
import AdminUsers from '../AdminUsers/AdminUsers.jsx'
import ChangeDomain from '../AdminHome/ChangeDomain.jsx'
import s from "../../../css/AdminHome.module.css"
import iconSettings from "../../../public/images/AdminHome/settings.png"
import { FaUser, FaFileAlt } from "react-icons/fa"
import { CgMenu } from "react-icons/cg"
import { TfiExchangeVertical } from "react-icons/tfi"
import EditProfile from "../../EditProfile/EditProfile.jsx"
import { putHome } from "../../../Redux/actions.js"

const AdminHome = () => {
  const navigate = useNavigate()
  const dispatch=useDispatch()
  const user = useSelector(state => state.user)
const value=useSelector(state=>state.homeValue)

console.log(value);
  useEffect(() => { }, [value])
  if(!user?.phone||!user?.email) {
    navigate("/firstEditProfile")
  }
  return(
<div className={s.containerAll}>
  <div className={s.container}>
    <div className={s.divSettings}>
      <div className={s.settings}>
        <p>{user?.firstName} {user?.lastName}</p>
        <img onClick={()=>dispatch(putHome("editProfile"))} src={iconSettings} className={s.iconSettings}/>
      </div>
      <p>{user?.username}</p>
    </div>

    <div className={s.divBtnsOptions}>

      <div onClick={()=>dispatch(putHome("users"))}
        className={value==="users"?s.borderGr:s.borderDefault}
        >
        <FaUser className={s.icons2}color={value==="users"?"#59B4B4":"#868AA5"}/>
        <p className={value==="users"?s.selected:null}>Usuarios</p>
        <CgMenu className={s.icons}color={value==="users"?"#9283BD":"#868AA5"}/>
      </div>

      <div onClick={()=>dispatch(putHome("courses"))}
        className={value==="courses"?s.borderGr:s.borderDefault}>
        <FaFileAlt className={s.icons2}color={value==="courses"?"#59B4B4":"#868AA5"}/>
        <p className={value==="courses"?s.selected:null}>Cursos</p>
        <CgMenu className={s.icons}color={value==="courses"?"#9283BD":"#868AA5"}/>
      </div>
      <div onClick={()=>dispatch(putHome("changeDomain"))}
        className={value==="changeDomain"?s.borderGr:s.borderDefault}>
        <TfiExchangeVertical className={s.icons}color={value==="changeDomain"?"#59B4B4":"#868AA5"}/>
        <p className={`${s.pUrl} ${value==="changeDomain"?s.selected:null}`}>Cambiar URL del Moodle activo</p>
        <CgMenu className={s.icons}color={value==="changeDomain"?"#9283BD":"#868AA5"}/>
      </div>

    </div>

  </div>

  <div className={s.right}>
  {
      value === "editProfile"
      ? <EditProfile/>
      : null
    }
    {
      value === "courses"
      ? <AdminCourses/>
      : null
    }

    {
      value === "users"
      ? <AdminUsers/>
      : null
    }

    {
      value === "changeDomain"
      ? <ChangeDomain/>
      : null
    }
  </div>
</div>
)
}
export default AdminHome