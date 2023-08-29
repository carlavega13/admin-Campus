import { useDispatch, useSelector } from "react-redux"
import { getCourses } from "../../Redux/actions";
const AdminCourses=()=>{
    const dispatch=useDispatch()
    const {courses,user}=useSelector(res=>res)
    if(courses.length===0){
        dispatch(getCourses({domain:user.domain,token:user.token}))
        return(
            <>
            LOADING!!!!!!!!!!!!
            </>
        )
    }
    console.log(courses);
return(
    <>
    CURSOS
    </>
)
}
export default AdminCourses