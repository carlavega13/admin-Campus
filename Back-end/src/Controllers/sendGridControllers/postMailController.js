
const postMailController=(info)=>{
try {
    console.log(info);
} catch (error) {
    console.log(error.message);
    return error.message
}
}
module.exports= postMailController

