import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import s from "./AdminCourseDetail.module.css"
import Papa from 'papaparse';
import downloadCsv from "../../downloadCsv";


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
console.log(csvInfo);
const handlerDownloadCsv=()=>{
downloadCsv(csvInfo,`${course.name} alumnos.csv`)
}
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
    <button onClick={handlerDownloadCsv}>Descargar CSV</button>
    </div>
)
}
export default AdminCourseDetail