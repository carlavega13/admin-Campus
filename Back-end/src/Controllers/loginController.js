const {User,Domain}=require("../db")
const axios=require("axios")
const postUser = require("./dbControllers/postUser")
const loginController=async(user)=>{
    try {
        const find=await User.findOne({where:{username:user.username}})
      
 const findUrl= await Domain.findOne({where:{isActive:true}})
 const token=await axios.get(`${findUrl.url}login/token.php?username=${user?.username}&password=${user?.password}&service=moodle_mobile_app`)
 console.log(token.data);

if(token.data.error){
    throw new Error("no fue posible iniciar sesion por favor revise su informacion y vuelva a intentarlo")
}
if(!find){
   const response= await postUser({
       ...user,
       token:token.data.token
    })
    return {
        username:response.username,
        token:response.token,
        rol:response.rol,
        domain:findUrl.url
    }
   }
 if(find.token!==token.data.token){
    await find.update({token:token.data.token})
 }
 return {
    id:find.id,
    username:find.username,
    token:find.token,
    rol:find.rol,
    domain:findUrl.url,
    firstName:find.firstname,
    lastName:find.lastname,
    phone:find.phone,
    email:find.email,
    DNI:find.dni
}
} catch (error) {
    console.log(error.message);
throw new Error(error.message)
}
}
module.exports=loginController

