const sgMail=require("./sendGridSetApiKey")
const postMailController=async(info)=>{
try {

    const msg={
        ...info,
        from:"ad.campus.13@gmail.com"
    }
 const response= await sgMail.send(msg)
    return response
} catch (error) {
    console.log(error.message);
    return error.message
}
}
module.exports= postMailController

