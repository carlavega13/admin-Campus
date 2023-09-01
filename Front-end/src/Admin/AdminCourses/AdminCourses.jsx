import { useDispatch, useSelector } from "react-redux"
import { getCourses } from "../../Redux/actions";
import s from "./AdminCourses.module.css"
import { BsWhatsapp } from 'react-icons/bs';
import { GrMailOption } from 'react-icons/gr';
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

return(
    <div className={s.box}>
    {
        courses?.map((course)=>{
          return (
            <div className={s.row}>
            <div>{course?.name}</div>
            <div>{course?.enrolledPeople.length}</div>
            <div>
                {course?.teacher.map(tea=><div>{tea.fullname}<a href={`https://wa.me/${tea.phone1}`}><BsWhatsapp/></a><GrMailOption/></div>)}
            </div>
            </div>
          )
        })
    }
    </div>
)
}
export default AdminCourses