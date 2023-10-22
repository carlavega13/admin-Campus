import axios from "axios"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import s from "../../../css/AdminHome.module.css"
import iconSettings from "../../../public/images/AdminHome/settings.png"
import iconOptions from "../../../public/images/AdminHome/options.png"
import iconUser from "../../../public/images/Login/Profile.png"
import iconFile from "../../../public/images/AdminHome/file.png"
import iconReport from "../../../public/images/AdminHome/report.png"
import iconChange from "../../../public/images/AdminHome/change.png"

const AdminHome=()=>{
    const navigate=useNavigate()
    const user=useSelector(state =>state.user)
    if(!user?.phone||!user?.email){
        navigate("/firstEditProfile")
    }
    return(
    <div className={s.container}>
      <div className={s.divSettings}>
        <div className={s.settings}>
          <p>{user?.firstName} {user?.lastName}</p>
          <img src={iconSettings} className={s.iconSettings}/>
        </div>
        <p>{user?.username}</p>
      </div>
      <div className={s.divBtnsOptions}>
        <div onClick={()=>navigate("/adminHome/users")}>
          <img src={iconUser} className={s.icons} />
          <p>Usuarios</p>
          <img src={iconOptions} className={s.iconOptions} />
        </div>
        <div onClick={()=>navigate("/adminHome/courses")}>
          <img src={iconFile} className={s.icons} />
          <p>Cursos</p>
          <img src={iconOptions} className={s.iconOptions} />
        </div>
        <div>
          <img src={iconReport} className={s.icons} />
          <p>Reportes</p>
          <img src={iconOptions} className={s.iconOptions} />
        </div>

        <div onClick={()=>navigate("/adminHome/changeDomain")}>
          <img src={iconChange} className={s.icons} />
          <p className={s.pUrl}>Cambiar URL del Moodle activo</p>
          <img src={iconOptions} className={s.iconOptions} />
        </div>
      </div>
    </div>
)
}
export default AdminHome