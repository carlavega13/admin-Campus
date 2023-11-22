import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getStudentGrades } from "../../Redux/actions";
import { useEffect, useState } from "react";

const StudentCourseDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [promise, setPromise] = useState(false);
  let course = useSelector((state) => state.courses);
  let user = useSelector((state) => state.user);
  course = course?.find((c) => c.id == id);
  if (!course?.grades) {
    dispatch(
      getStudentGrades({
        domain: user.domain,
        token: user.token,
        courseid: course.id,
        userid: user.id,
      })
    ).then((res) => setPromise(true));
    return <div>LOADING...</div>;
  }
  console.log(course.grades);

  return (
    <div>
      <button onClick={() => navigate("/studentHome")}>HOME</button>
      <h1>Calificaciones del curso: {`${course?.fullname}`}</h1>
      {course?.grades?.map((act) => {
        return (
          <div
            key={act.id}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <p>{act.itemname ? act.itemname : "Calificación final"}</p>
            <p>{act.graderaw ? act.graderaw : "No realizado"}</p>
          </div>
        );
      })}
    </div>
  );
};
export default StudentCourseDetail;
