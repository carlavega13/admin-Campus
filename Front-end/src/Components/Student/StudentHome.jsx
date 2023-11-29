import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import setting from "../../public/images/AdminHome/setting.png";
import { putHome,logOut } from "../../Redux/actions";
import EditProfile from "../EditProfile/EditProfile";
import { FaFileAlt } from "react-icons/fa";
import { CgMenu } from "react-icons/cg";
import selectSetting from "../../public/images/AdminHome/select_setting.png";
import s from "../../css/StudentHome.module.css";
import StudentCourses from "./StudentCourses";

const StudentHome = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const value = useSelector((state) => state.homeValue);
  if (!user.firstname || !user.phone) {
    return <div>LOADING...</div>;
  }

  return (
    <div className={s.containerAll}>
      <div className={s.container}>
        <div className={s.divSettings}>
          <div className={s.settings}>
            <p>
              {`${user?.firstname[0].toUpperCase()}${user?.firstname.slice(1)} 
            ${user?.lastname[0].toUpperCase()}${user?.lastname.slice(1)} `}
            </p>
            <img
              onClick={() => dispatch(putHome("editProfile"))}
              src={value === "editProfile" ? selectSetting : setting}
              className={`${s.iconSettings} ${
                value === "editProfile" ? s.selectedProfile : null
              }`}
            />
          </div>
          <p>{user?.username}</p>
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
            />
            
          </div>
          <button
          onClick={() => {
            dispatch(logOut());
            navigate("/");
          }}
        >
          LOGOUT
        </button>
        </div>
      </div>

      <div className={s.right}>
        {value === "editProfile" ? <EditProfile /> : null}

        {value === "courses" ? <StudentCourses user={user} /> : null}
      </div>
    </div>
  );
};
export default StudentHome;
