const axios=require("axios")
const getPeopleInCourse=async (payload)=>{
    try {
        const {domain,token,courseId}=payload
        const people=await axios.get(`${domain}/webservice/rest/server.php`, {
            params: {
                wstoken: token,
                wsfunction: "core_enrol_get_enrolled_users ",
                moodlewsrestformat: 'json',
                courseid:courseId
            }
        })
    
        
        const teachers=people.data.filter((person)=>{
            if(person.roles){
                if(person.roles[0]){

                    if(person.roles[0].shortname){
     
                        if(person.roles[0].shortname==="teacher"||person.roles[0].shortname==="editingteacher"){
                          return person
                        }
                    }
                }
            }
        })
       
        return [courseId,teachers,...people.data]
        
    } catch (error) {
        console.log(error.message);
    }
}
module.exports=getPeopleInCourse