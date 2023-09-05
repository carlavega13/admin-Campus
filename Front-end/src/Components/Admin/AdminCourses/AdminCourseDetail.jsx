import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import s from "../../../css/AdminCourseDetail.module.css"
import Papa from 'papaparse';
import downloadCsv from "../../../downloadCsv";
import { BsWhatsapp } from 'react-icons/bs';


const AdminCourseDetail=()=>{
    const {id}=useParams()
   let courses=useSelector(state=>state.courses)
   let course=courses?.find(co=>co.id==id)
course.enrolledPeople=course.enrolledPeople.filter(student=>student.roles&&student.roles[0]?.shortname!=="teacher")
let csvInfo=course.enrolledPeople.map(people=>{
    return {
        nombre:people.fullname,
        email:people.email,
        telefono:people.phone1
    }
})
csvInfo=Papa.unparse(csvInfo)

const handlerDownloadCsv=()=>{
downloadCsv(csvInfo,`${course.name} alumnos.csv`)
}
return(
    <div className={s.box}>
    {course?.enrolledPeople?.map(student=>{
        return (
            <div className={s.cell}>
                <div className={s.name}>{student.fullname}</div>
                <div className={s.name}>{student.email}</div>
                <div className={s.name}>{student.phone1}{student.phone1?<a href={`https://wa.me/${student.phone1}`}><BsWhatsapp/></a>:""}</div>
            </div>
        )
    })}
    <button onClick={handlerDownloadCsv}>Descargar CSV</button>
    </div>
)
}
export default AdminCourseDetail