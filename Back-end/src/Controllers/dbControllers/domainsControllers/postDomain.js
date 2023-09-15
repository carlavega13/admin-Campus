
const {Domain}=require("../../../db")
const getUserForDomain=require("./getUserForDomain")
const postDomain=async({domain})=>{
    try {
       const res= await getUserForDomain(domain)
    //    console.log(res);
      if(!res){
        return "debe crear un usuario superAdmin para esta url"
      }
        const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
        if(typeof domain==="string"){
            if(urlRegex.test(domain)){
                const find = await Domain.findOne({where:{isActive:true}})
                if(find){

                    find.update({isActive:false})
                }
                const findCopy=await Domain.findOne({where:{url:domain}})
                if(findCopy){
                    findCopy.update({isActive:true})
                    return findCopy
                }
               
            const response= await Domain.create({url:domain,isActive:true})
            return response
        }
    }
    return res
} catch (error) {
    return error.message
}
}
module.exports=postDomain
    
    