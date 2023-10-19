import { useDispatch, useSelector } from "react-redux"
import { getCourses } from "../../../Redux/actions";
import s from "../../../css/AdminCourses.module.css"
import { BsWhatsapp } from 'react-icons/bs';
import { GrMailOption } from 'react-icons/gr';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import EmailPopOut from "../../EmailPopOut";
import { DataGrid } from '@mui/x-data-grid';
const AdminCourses=()=>{
        const dispatch=useDispatch()
    const navigate=useNavigate()

    const {courses,user,allUsers}=useSelector(res=>res)
    const[flag,setFlag]=useState({
        state:false,
        to:[]
    })
    const [teacher,setTeacher]=useState([])
    if(courses?.length===0){
        dispatch(getCourses({domain:user.domain,token:user.token}))
        return(
            <>
            LOADING!!!!!!!!!!!!
            </>
        )
    }
    if(courses==="No hay cursos"){
        return(
            <div>
                <h1>No hay cursos que mostrar</h1>
                
                <button onClick={()=>navigate("/adminHome")}>HOME</button>
        <button onClick={()=>navigate("/createCourse")}>Crea un curso</button>
            </div>
        )
    }
const columns=[
    { field: 'course', headerName: 'CURSO',width: 300,description:"Haga click en un nombre para ver el detalle del curso"},
    { field: 'usersamount', headerName: 'CANTIDAD DE USUARIOS', width: 300},
    { field: 'teacher', headerName: 'PROFESOR',width: 300,
    renderCell: (params) => {
        const phoneNumber = params.row.phone1;
        if (phoneNumber) {
          return (
              <div style={{display:"flex"}}>
                         <p>{params.row.teacher}</p>
            <a  href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer">
              <BsWhatsapp style={{position:"relative",top:"15", marginLeft:"10"}} />
            </a>
              </div>
       
          );
        }
        return (
            <div style={{display:"flex"}}>
                       <p>{params.row.teacher?params.row.teacher:""}</p>
         
            </div>
     
        );
       
      }
},
]
const rows=courses?.map(course=>{

    return {id:course.id,course:course.name,usersamount:course.enrolledPeople.length,teacher:course.teacher[0]?course.teacher[0].fullname:"",phone1:course.teacher[0]&&course.teacher[0].phone1?course.teacher[0].phone1:"" }
})

const handlerSendSelected=()=>{

    if(teacher.length===0){
        alert("Debes selecionar al menos un usuario")
        }else{
        const usersInfo=teacher.map(id=>{
            let cour= courses.find(cours=>cours.id==id)
     
            if(cour.teacher.length>=1){
                return cour.teacher[0].email
            }
         return 
        }).filter(e=>e)

   
            setFlag({
                state:true,
                to:usersInfo
            })
        }
}

return(
    <div>
            <div>
        <DataGrid
         rows={rows}
         columns={columns}
         initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 6 },
          },
        }}
        pageSizeOptions={[6,10,40,50]}
        checkboxSelection
        onRowSelectionModelChange={(teacher)=>{
            setTeacher(teacher)
          }}
        onCellClick={(params,e)=>{
            
            console.log(params);
            if(params.row.usersamount>0){
                      if(params.field==="course"){
                navigate(`courseDetail/${params.id}`)
            }
            }
      
          
                }}
        />
    </div>
    <button onClick={handlerSendSelected}>{`Enviar email a todos los usuarios seleccionados`}</button>
    {flag.state?<EmailPopOut  to={flag.to} flag={flag.state} setFlag={setFlag}/>:""}
    </div>

)
}

export default AdminCourses