const axios  = require("axios")

const getStudentGrades=async({token,domain,courseId,userId})=>{
try {
    const params={
        wstoken: token,
        wsfunction: "gradereport_user_get_grade_items",
        moodlewsrestformat: 'json',
        courseid:Number(courseId),
        userid:Number(userId)
    }
    const res=await axios(`${domain}webservice/rest/server.php`,{params})
    console.log(res.data);
    return res.data
} catch (error) {
    throw new Error(error.message)
}
}
module.exports=getStudentGrades
// gradereport_user_get_grade_items