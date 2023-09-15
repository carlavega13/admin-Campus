const {User}=require("../../../db")
const axios=require("axios")
const getUserForDomain=async(domain)=>{
try {

    const admins= await User.findAll({where:{
        rol:"administrador",
        isSuperAdmin: true
    }})
    const find=admins.find(async admin=>{
       let token=await axios.get(`${domain}login/token.php?username=${admin.username}&password=${admin.password}&service=moodle_mobile_app`)
       if(token.data.token){
        return admin
       }
    })
 console.log(find);
 if(find.username){
    return true
 }else{

     return false
 }

} catch (error) {
    
}
}
module.exports=getUserForDomain
// const token=await axios.get(`${findUrl.url}login/token.php?username=${user?.username}&password=${user?.password}&service=moodle_mobile_app`)
//  console.log(token.data,findUrl);