const axios=require("axios")
const getPeopleInCourse = require("./getPeopleInCourse")
const getCoursesController=async(user)=>{
    try {
        let courses=await axios.get(`${user.domain}webservice/rest/server.php`, {
    params: {
        wstoken:user.token,
        wsfunction: "core_course_get_courses",
        moodlewsrestformat: 'json',
    }})
    let response=[]
   courses.data.shift()
for (let i = 0; i < courses.data.length; i++) {
    let obj={
id:courses.data[i].id,
name:courses.data[i].displayname,
fullname:courses.data[i].fullname,
startdate:courses.data[i].startdate,
enddate:courses.data[i].enddate,
enrolledpeople:await getPeopleInCourse({domain:user.domain,token:user.token,courseId:courses.data[i].id})

    }

    response.push(obj)
    
}
    return response
} catch (error) {
    console.log(error.message);
    return error.message
}
}
module.exports=getCoursesController