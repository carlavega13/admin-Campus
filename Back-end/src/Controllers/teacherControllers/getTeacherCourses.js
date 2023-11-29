const getCoursesController = require("../coursesControllers/getCoursesController");

const getTeacherCourses=async(user)=>{
try {
    const course =await getCoursesController(user)
    console.log(course); 
    return course
} catch (error) {
    
}
}
module.exports=getTeacherCourses