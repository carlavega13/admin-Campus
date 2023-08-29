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
    
        return [courseId,...people.data]
        
    } catch (error) {
        console.log(error.message);
    }
}
module.exports=getPeopleInCourse