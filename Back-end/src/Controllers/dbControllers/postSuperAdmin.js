const axios=require("axios")

const postSuperAdmin=async({username,password,domain,isSuperadmin})=>{
try {
    const token = await axios.get(
        `${domain}login/token.php?username=${username}&password=${password}&service=moodle_mobile_app`
        );
        console.log(token.data.token);
        if(token.data.token){
          
        }else{
 throw new Error("No hay usuario existente para esas credenciales.")
        }
} catch (error) {
   throw new Error( error.message )
}
}
module.exports=postSuperAdmin