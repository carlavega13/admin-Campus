import { useDispatch, useSelector } from "react-redux";
import { getStudentCourses } from "../../Redux/actions";
import { dateTransfer } from "../Admin/AdminUsers/AdminUserDetail";
import { useNavigate } from "react-router-dom";

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
    return <div>Loading...!!</div>;
  }

  return (
    <div>
      {courses.map((course) => {
        return (
          <div>
            <button onClick={() => navigate(`/grades/${course.id}`)}>
              Calificaciones
            </button>
            <div>nombre: {course.fullname}</div>
            <div>progreso: {course.progress ? course.progress : 0}</div>

            <div>
              ultimo acceso:{" "}
              {course.lastaccess ? dateTransfer(course.lastaccess) : "Nunca"}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default StudentCourses;
