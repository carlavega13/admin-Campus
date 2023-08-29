const { response } = require("express");
const {Domain}=require("../../../db")
const postDomain=async({domain})=>{
    try {
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
} catch (error) {
    return error.message
}
}
module.exports=postDomain
    
    