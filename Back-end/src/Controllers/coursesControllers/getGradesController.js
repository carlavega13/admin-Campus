const axios=require("axios")
const getGradesController=async(body)=>{
try {
    // console.log(body); 
   let{people,token,domain,id}=body
   let grades=await axios.get(`${domain}/webservice/rest/server.php`, {
    params: {
        wstoken: token,
        wsfunction: "gradereport_user_get_grade_items",
        moodlewsrestformat: 'json',
        courseid:id
    }
})
console.log(grades.data);
  return grades.data
} catch (error) {
    
}
}
module.exports=getGradesController