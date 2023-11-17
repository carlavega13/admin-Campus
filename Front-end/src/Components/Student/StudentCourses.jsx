import { useDispatch, useSelector } from "react-redux"
import { getStudentCourses } from "../../Redux/actions"
import { DataGrid } from "@mui/x-data-grid"

const StudentCourses=({user})=>{
    const dispatch=useDispatch()
    const courses=useSelector(state=>state.courses)
    if(courses.length===0){
        dispatch(getStudentCourses({domain:user.domain, token:user.token,userId:user.id}))
        return(
            <div>
                Loading...!!
            </div>
        )
    }

    return( 
        <div>
{     courses.map(course=>{
     return(
        <div>
            <div>
          nombre: {course.fullname}  

            </div>
            <div>
           progreso: {course.progress&&course.progress}

            </div>

           <div>

           ultimo acceso: {course.lastaccess?course.lastaccess:"Nunca"}
           </div>
             </div>
     )
     })}
        </div>
    )
}
export default StudentCourses