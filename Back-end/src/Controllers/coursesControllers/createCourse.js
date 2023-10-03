const axios=require("axios")
const createCourse=async(info,domain,token)=>{
try {
const res=await axios(`${domain}/webservice/rest/server.php?wstoken=${token}&wsfunction=core_course_create_courses&moodlewsrestformat=json&courses[0][fullname]=${info.fullname}&courses[0][shortname]=${info.shortname}&courses[0][categoryid]=${info.categoryid}`)
    return res.data
} catch (error) {
    console.log(error);
}
}
module.exports=createCourse