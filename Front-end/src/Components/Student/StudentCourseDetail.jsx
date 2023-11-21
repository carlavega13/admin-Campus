import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { getStudentGrades } from "../../Redux/actions";


const StudentCourseDetail=()=>{
    const {id}=useParams()
    const dispatch=useDispatch()
    let course=useSelector(state=>state.courses)
    let user=useSelector(state=>state.user)
    course=course?.find(c=>c.id==id)
    if(!course?.grades){
        console.log("caa");
dispatch(getStudentGrades({domain:user.domain,token:user.token,courseid:course.id,userid:user.id}))
    }
    console.log(course);
    return(
        <div>
    
        </div>
    )
}
export default StudentCourseDetail