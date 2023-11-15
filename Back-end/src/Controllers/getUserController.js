const axios=require("axios")
const getUserController=async(user)=>{
try {
  const token=await axios(`${user.domain}login/token.php?username=${user.username}&password=${user.password}&service=prueba`)
  const response= await axios(`${user.domain}webservice/rest/server.php?wstoken=${token.data.token}&wsfunction=core_user_get_users&moodlewsrestformat=json&criteria[0][key]=username&criteria[0][value]=${user.username}`)
  return response.data.users[0]
} catch (error) {
    return error.message
}
}
module.exports=getUserController