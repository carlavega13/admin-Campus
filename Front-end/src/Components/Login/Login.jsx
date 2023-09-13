import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../../Redux/actions"
import { useNavigate } from "react-router-dom"
import s from "../../css/Login.module.css"
import robotStandar from "../../public/images/Login/ROBOT-VERDE.png"
import msgIcon from "../../public/images/Login/Vector-Nube-Msg.png"

const Login=()=>{
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const userLogged=useSelector(state=>state.user)

    const[user,setUser]=useState(
        {
         username:"",
         password:""
        })
            
    const handlerChange=(e)=>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }    
    const handlerLogin=()=>{
        dispatch(login(user))
        
    }
    useEffect(()=>{},[userLogged])

    if(userLogged?.username&&userLogged?.phone===null) {
        navigate("firstEditProfile")
      return
    }
    if(userLogged?.username&&userLogged?.rol==="administrador") {
        navigate("/adminHome")
    }
                 
              
return (
    <div className={s.containerLogin}>

      <div className={s.icons}>
        <img src={msgIcon}className={s.msgIcon}/>
        <img src={robotStandar} className={s.robotStandar}/>
      </div>

      <div className={s.inputs}>

        <label htmlFor="username">
          Nombre de usuario
        </label>
        <input onChange={handlerChange} name="username"value={user.username}
            type="text" placeholder="Nombre de usuario"
            />
    
        <label htmlFor="password">
          Contraseña
        </label>
        <input onChange={handlerChange} name="password"
            value={user.password} 
            type="text" placeholder="Contraseña"/>
    
        <button onClick={handlerLogin}
            className={s.btnLogin}>Ingresar</button>

      </div>
      
    </div>
)
}
export default Login

// Las contraseñas deben tener al menos una longitud de 8 caracteres.
// Las contraseñas deben tener al menos 1 dígito(s).
// Las contraseñas deben tener al menos 1 mayúscula(s).
// Las contraseñas deben tener al menos 1 caracter(es) no alfanumérico(s) como *,-, o #.