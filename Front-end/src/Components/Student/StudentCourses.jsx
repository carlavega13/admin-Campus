import { useDispatch, useSelector } from "react-redux";
import { getStudentCourses } from "../../Redux/actions";
import { dateTransfer } from "../Admin/AdminUsers/AdminUserDetail";
import { useNavigate } from "react-router-dom";
import loading from "../../public/images/AdminHome/loading-loading-gif.gif"
import s from "../../css/StudentCourses.module.css"

const StudentCourses = ({ user }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses);
  if (courses.length === 0) {
    dispatch(
      getStudentCourses({
        domain: user.domain,
        token: user.token,
        userId: user.id,
      })
    );
    return (
      <div className={s.containerLoading}>
        <button onClick={() => navigate("/adminHome")}
          className={s.btn}
          style={{marginLeft: ".5rem"}}>
          HOME
        </button>
        <img src={loading} alt="Cargando..."className={s.loadingIcon}/>
      </div>
    );
  }

  return (
    <div className={s.container}>
      {courses.map((course) => {
        return (
          <div>
            <button className={s.btn} onClick={() => navigate(`/grades/${course.id}`)}>
              Calificaciones
            </button>
            <div className={s.info}><label>Nombre:</label>{course.fullname}</div>
            <div className={s.info}><label>Progreso: </label> {course.progress ? course.progress : 0}</div>

            <div className={s.info}>
              <label>Ultimo acceso:</label>{" "}
              {course.lastaccess ? dateTransfer(course.lastaccess) : "Nunca"}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default StudentCourses;
