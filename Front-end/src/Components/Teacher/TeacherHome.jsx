import { useDispatch, useSelector } from "react-redux";
import { logOut, putHome } from "../../Redux/actions";
import { useNavigate } from "react-router-dom";
import setting from "../../public/images/AdminHome/setting.png";
import { FaFileAlt } from "react-icons/fa";
import { CgMenu } from "react-icons/cg";
import EditProfile from "../EditProfile/EditProfile";
import selectSetting from "../../public/images/AdminHome/select_setting.png";
import TeacherCourse from "./TeacherCourse";
import s from "../../css/TeacherHome.module.css";
import { ToastInfo } from "../../functions/toast";
import { CiLogout } from "react-icons/ci";
import {FaUserAlt}from "react-icons/fa"
const TeacherHome = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const value = useSelector((state) => state.homeValue);
  const [open, setOpen] = useState(false)
  if (!user.firstname || !user.phone) {
    return <div>LOADING...</div>;
  }

  return (
    <div className={s.containerAll}>
      <ToastInfo />
      <div className={s.container}>
        {/* <div className={s.divSettings}> */}
        <div className={s.settings}>
          <p>
            {`${user?.firstname[0].toUpperCase()}${user?.firstname.slice(1)} 
              ${user?.lastname[0].toUpperCase()}${user?.lastname.slice(1)} `}
          </p>
          <FaUserAlt
            color={value === "editProfile" ? "#9283bd" : "#59b4b4"}
            onClick={() => setOpen(!open)}
            className={`${s.iconSettings} ${
              value === "editProfile" ? s.selectedProfile : null
            }`}
          />
          <div
            className={
              open ? s.menuProfileContainer : s.menuProfileContainerClose
            }
          >
            <div>
              <p
                onClick={() => {
                  dispatch(putHome("editProfile"));
                  setOpen(false);
                }}
              >
                Mi Perfil
              </p>
              <div
                style={{
                  borderRight: ".1rem solid #9283bd",
                  height: "1.3rem",
                  marginBottom: ".6rem",
                }}
              />
              <p
                onClick={() => {
                  dispatch(logOut());
                  navigate("/");
                }}
              >
                Cerrar Sesión
              </p>
            </div>
          </div>
        </div>

        <div className={s.divBtnsOptions}>
          <div
            onClick={() => dispatch(putHome("courses"))}
            className={value === "courses" ? s.borderGr : s.borderDefault}
          >
            <FaFileAlt
              className={s.icons2}
              color={value === "courses" ? "#59B4B4" : "#868AA5"}
            />
            <p className={value === "courses" ? s.selected : null}>Cursos</p>
            <CgMenu
              className={s.icons}
              color={value === "courses" ? "#9283BD" : "#868AA5"}
            />{" "}
          </div>
        </div>
      </div>

      <div className={s.right}>
        {value === "editProfile" ? <EditProfile /> : null}

        {value === "courses" ? <TeacherCourse user={user} /> : null}
      </div>
    </div>
  );
};
export default TeacherHome;
