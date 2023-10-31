const{User}=require("../db")
const putUserController=async({firstName,lastName,DNI,phone,email,id,domain})=>{
try {
    const userToEdit= await User.findOne({where:{id:id}})
    if(DNI&&DNI.length>5){
        const res= await userToEdit.update({
            firstname:firstName,
            lastname:lastName,
            fullname:`${firstName} ${lastName}`,
            dni:DNI.toString(),
            phone:phone,
            email:email,
           
        })
  return {
    id:res.id,
    username:res.username,
    token:res.token,
    rol:res.rol,
    isSuperAdmin:res.isSuperAdmin,
     firsname:res.firsname,
     lastname:res.lastname,
     phone:res.phone,
     email:res.email,
     fullname:`${res.firstname} ${res.lastname}`,
     domain:domain
   }
    }else{

        const res1= await userToEdit.update({
            firstname:firstName,
            lastname:lastName,
            phone:phone,
            email:email,
            fullname:`${firstName} ${lastName}`,
           
        })
        
       
               return {
                id:res1.id,
                username:res1.username,
                token:res1.token,
                rol:res1.rol,
                isSuperAdmin:res1.isSuperAdmin,
                 firsname:res1.firsname,
                 lastname:res1.lastname,
                 phone:res1.phone,
                 email:res1.email,
                 fullname:`${res1.firstname} ${res1.lastname}`,
                 domain:domain
               }
    }
} catch (error) {
    
}
}
module.exports=putUserController