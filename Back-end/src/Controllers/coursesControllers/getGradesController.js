const axios=require("axios")
const getGradesController=async(body)=>{
try {
    console.log(body); 
    const params = {
        wstoken: body.token,
        wsfunction: 'core_grades_get_grades',
        moodlewsrestformat: 'json',
        courseid: 2,  // Reemplaza con el ID del curso deseado
        userid: 3,  // Opcional: Reemplaza con el ID del usuario si es necesario
    };
    const grade= await axios.post(`${body.domain}/webservice/rest/server.php`,null,{params})
    console.log(grade.data);
    return grade.data
} catch (error) {
    
}
}
module.exports=getGradesController