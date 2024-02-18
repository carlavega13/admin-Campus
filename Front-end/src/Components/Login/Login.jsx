import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut, login } from "../../Redux/actions";
import { useNavigate } from "react-router-dom";
import s from "../../css/Login.module.css";
import userIcon from "../../public/images/Login/Profile.png";
import passIcon from "../../public/images/Login/mdi_password.png";
import { ToastInfo,notify, notifyError } from "../../functions/toast";
import loading from "../../public/images/AdminHome/loading-loading-gif.gif"

const Login = () => {
  console.log("en barra (login)");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogged = useSelector((state) => state.user);

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handlerChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
   const [searchingUser, setSearchingUser] = useState(false)
    const handlerLogin = async () => {
      try {
        if(userLogged?.username?.length>1){
          dispatch(logOut())
          return
        }
        if(!searchingUser) {
          setSearchingUser(true)
          await dispatch(login(user));
          setSearchingUser(false)
        }
      } catch (error) {
       notifyError(error.message);
      }
    };
  useEffect(() => {}, [userLogged]);
  if (userLogged?.username && !userLogged?.phone) {
    navigate("firstEditProfile");

  }
  if (userLogged?.username && userLogged?.rol === "administrador") {
    console.log("va a admin home desde login");
    navigate("/adminHome");
  }
  if (userLogged?.username && userLogged?.rol === "estudiante") {
    navigate("/studentHome");
  }
  if (userLogged?.username && userLogged?.rol === "profesor") {
    navigate("/teacherHome");
  }


  return (
    <div className={s.containerLogin}>
      <ToastInfo/>
      <p className={s.title}>Ingresa</p>

      <div className={s.inputs}>
        <div>
          <img src={userIcon} className={s.userIcon} />
          <input
            onChange={handlerChange}
            name="username"
            value={user.username}
            type="text"
            placeholder="Nombre de usuario"
          />
        </div>

        <div>
          <img src={passIcon} className={s.passIcon} />
          <input
            onChange={handlerChange}
            name="password"
            value={user.password}
            type="password"
            placeholder="Contraseña"
          />
        </div>
        <button onClick={handlerLogin} className={s.btnLogin}>
        {searchingUser?<img src={loading} className={s.loadingIcon}/>:"Ingresar"}
        </button>
      </div>
    </div>
  );
};
export default Login;
