const { response } = require("express");
const {Domain}=require("../../../db")
const postDomain=async({domain})=>{
    try {
        const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
        if(typeof domain==="string"){
            if(urlRegex.test(domain)){
            const response= await Domain.create({url:domain})
            return response
        }
    }
} catch (error) {
    return "esta url ya existe!"
}
}
module.exports=postDomain
    
    