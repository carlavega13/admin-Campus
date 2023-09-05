const sgMail=require("./sendGridSetApiKey")
const postMailController=async(info)=>{
try {
    console.log(info);
    const msg={
        ...info
    }
 const response= await sgMail.send(msg)
    return response
} catch (error) {
    console.log(error.message);
    return error.message
}
}
module.exports= postMailController

