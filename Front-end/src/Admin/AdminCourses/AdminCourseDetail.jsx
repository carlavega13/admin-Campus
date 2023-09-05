import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import s from "./AdminCourseDetail.module.css"

const AdminCourseDetail=()=>{
    const {id}=useParams()
   let courses=useSelector(state=>state.courses)
   let course=courses?.find(co=>co.id==id)
course.enrolledPeople=course.enrolledPeople.filter(student=>student.roles&&student.roles[0]?.shortname!=="teacher")
console.log(course.enrolledPeople);
return(
    <div className={s.box}>
    {course?.enrolledPeople?.map(student=>{
        return (
            <div className={s.cell}>
                <div>{student.fullname}</div>
                <div>{student.email}</div>
                <div>{student.phone1}</div>
            </div>
        )
    })}
    </div>
)
}
export default AdminCourseDetail