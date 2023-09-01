const axios=require("axios")
const getUserController=async(user)=>{
    
try {
    const response =await axios.get(`${user.domain}webservice/rest/server.php?wstoken=${user.token}&wsfunction=core_user_get_users&moodlewsrestformat=json&criteria[0][key]=username&criteria[0][value]=${user.username}`)
    console.log(response.data)
} catch (error) {
    
}
}
module.exports=getUserController