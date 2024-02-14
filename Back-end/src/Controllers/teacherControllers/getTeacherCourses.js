const getCoursesController = require("../coursesControllers/getCoursesController");

const getTeacherCourses=async(user)=>{
try {
  console.log("dassa",user);
  let course =await getCoursesController(user)
  course=course.map(c=>{
   let find= c.teacher.find(t=>t.id===user.userid)
   if(find){
    return c
   }
  }).filter(c=>c)
course=course.map(c => {
 c.enrolledPeople= c.enrolledPeople.filter(person=>person.roles[0].shortname!=="teacher"&&person.roles[0].shortname!=="editingteacher")
 return c
});
    return course
} catch (error) {
  throw new Error(error.message)
}
}
module.exports=getTeacherCourses