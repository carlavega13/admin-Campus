const{User}=require("../db")
const axios=require("axios")
const putUserController=async({firstName,lastName,DNI,phone,email,id})=>{
try {
    const userToEdit= await User.findOne({where:{id:id}})
    if(DNI&&DNI.length>5){
        const res= await userToEdit.update({
            firstname:firstName,
            lastname:lastName,
            fullname:`${firstName} ${lastName}`,
            dni:DNI.toString(),
            phone:phone,
            email:email
        })
   return res
    }else{

        const res1= await userToEdit.update({
            firstname:firstName,
            lastname:lastName,
            phone:phone,
            email:email,
            fullname:`${firstName} ${lastName}`,
        })
        
               return res1
    }
} catch (error) {
    
}
}
module.exports=putUserController