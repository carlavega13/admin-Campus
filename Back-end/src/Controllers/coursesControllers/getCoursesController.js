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
    let promises=[]
   courses.data.shift()
courses=courses.data.map((course)=>{
    promises.push(getPeopleInCourse({domain:user.domain,token:user.token,courseId:course.id}))
    return{
        
            id:course.id,
            name:course.displayname,
            fullname:course.fullname,
            startdate:course.startdate,
            enddate:course.enddate
            
            
                
    }
})
const promisesUsers=await Promise.all(promises).then(res=>res)
for (let i = 0; i < promisesUsers.length; i++) {
  let find=  courses.findIndex((course)=>course.id===promisesUsers[i][0])
  promisesUsers[i].shift()
  courses[find]={
    ...courses[find],
    enrolledPeople: promisesUsers[i]
  }

  
    
}

    return courses
} catch (error) {
    console.log(error.message);
    return error.message
}
}
module.exports=getCoursesController
// for (let i = 0; i < courses.data.length; i++) {
//     let obj={
// id:courses.data[i].id,
// name:courses.data[i].displayname,
// fullname:courses.data[i].fullname,
// startdate:courses.data[i].startdate,
// enddate:courses.data[i].enddate,
// enrolledpeople: await getPeopleInCourse({domain:user.domain,token:user.token,courseId:courses.data[i].id})

//     }

//     response.push(obj)
    
// }
