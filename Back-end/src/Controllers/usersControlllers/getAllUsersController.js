const axios=require("axios")
const {User}=require("../../db")
const getAllUsersController=async(info)=>{
try {
    const {domain,token}=info
    const people=await axios.get(`${domain}/webservice/rest/server.php`, {
        params: {
            wstoken: token,
            wsfunction: "core_enrol_get_enrolled_users ",
            moodlewsrestformat: 'json',
            courseid:1
        }
    })
        
    for (let i = 0; i < people.data.length; i++) {
      
        if(!people.data[i].phone1){
            let findDb= await User.findOne({where:{username:people.data[i].username}})
            
            if(findDb&&findDb.phone){
                people.data[i].phone1=findDb.phone
         

           }
      }
        
    }
    return people.data
} catch (error) {
    console.log(error.message);
}
}
module.exports=getAllUsersController
