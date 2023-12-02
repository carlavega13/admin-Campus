import { useDispatch, useSelector } from "react-redux"
import { logOut,putHome } from "../../Redux/actions"
import { useNavigate } from "react-router-dom"
import setting from "../../public/images/AdminHome/setting.png"
import { FaFileAlt } from "react-icons/fa";
import { CgMenu } from "react-icons/cg";
import EditProfile from "../EditProfile/EditProfile";
import selectSetting from "../../public/images/AdminHome/select_setting.png";
import TeacherCourse from "./TeacherCourse";

const TeacherHome=()=>{
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const user = useSelector((state) => state.user);
    const value = useSelector((state) => state.homeValue);
    if (!user.firstname || !user.phone) {
      return <div>LOADING...</div>;
    }
  
    return (
      <div>
        <div >
          <div >
            <div >
              <p>
                {`${user?.firstname[0].toUpperCase()}${user?.firstname.slice(1)} 
              ${user?.lastname[0].toUpperCase()}${user?.lastname.slice(1)} `}
              </p>
              <img
                onClick={() => dispatch(putHome("editProfile"))}
                src={value === "editProfile" ? selectSetting : setting}
                style={{width:"2rem"}}
              />
            </div>
            <p>{user?.username}</p>
          </div>
  
          <div >
            <div
              onClick={() => dispatch(putHome("courses"))}
             
            >
              <FaFileAlt
                
                color={value === "courses" ? "#59B4B4" : "#868AA5"}
              />
              <p >Cursos</p>
              <CgMenu
             
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
  
        <div >
          {value === "editProfile" ? <EditProfile /> : null}
  
          {value === "courses" ? <TeacherCourse user={user} /> : null}
        </div>
      </div>
    );
}
export default TeacherHome