const axios=require("axios")
const {User}=require("../../db")
const editUserMoodle=async(body)=>{
try {
    const {info}=body
const admin=await User.findOne({where:{username:body.username}})
const token=await axios(`${body.domain}login/token.php?username=${admin.username}&password=${admin.password}&service=prueba`)
// const res=await axios(`${body.domain}/webservice/rest/server.php?wstoken=${token.data.token}&wsfunction=core_user_update_users&moodlewsrestformat=json&users[0][id]=378&users[0][username]=${info.username}&users[0][password]=${info.password}&users[0][firstname]=${info.firstname}&users[0][lastname]=${info.lastname}&users[0][email]=${info.email}`)
let url=`${body.domain}/webservice/rest/server.php?wstoken=${token.data.token}&wsfunction=core_user_update_users&moodlewsrestformat=json&users[0][id]=${info.id}`
if(info.username){
url+=`&users[0][username]=${info.username}`
}
if(info.password){
    url+=`&users[0][password]=${info.password}`
}
if(info.firstname){
    url+=`&users[0][firstname]=${info.firstname}`
}
if(info.lastname){
    url+=`&users[0][lastname]=${info.lastname}`
}
if(info.email){
    url+=`&users[0][email]=${info.email}`
}

if(info.phone1){
    url+=`&users[0][phone1]=${info.phone1}`
}
if(info.country){
    url+=`&users[0][country]=${info.country}`
}
if(info.city){
    url+=`&users[0][city]=${info.city}`
}
const res=await axios(`${url}`)


if(!res.data){
    return "Se actualizo su información"
}else{
    return "No se pudo actualizar la información"
}
} catch (error) {
    console.log(error.message);
}
}
module.exports=editUserMoodle