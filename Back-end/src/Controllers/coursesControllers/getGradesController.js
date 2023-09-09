const axios=require("axios")
const getPercentage = require("./getPercentage")
const getGradesController=async(body)=>{
try {
    let{people,token,domain,id}=body
   let grades=await axios.get(`${domain}/webservice/rest/server.php`, {
    params: {
        wstoken: token,
        wsfunction: "gradereport_user_get_grade_items",
        moodlewsrestformat: 'json',
        courseid:id
    }
})
for (let i = 0; i < grades.data.usergrades.length; i++) {
 let index=people.findIndex(person=>person.id==grades.data.usergrades[i].userid)
 people[index]={
    ...people[index],
    grades:grades.data.usergrades[i].gradeitems
 }}
 let ids=people.map(p=>p.id)

let response=await getPercentage(ids,domain,token)
// console.log(people);
people=people.map((pep,index)=>{
    pep={
        ...pep,
enrolledcourses:response[index]
    }
    return pep

})
// console.log(people);
  return people
} catch (error) {
    
}
}
module.exports=getGradesController