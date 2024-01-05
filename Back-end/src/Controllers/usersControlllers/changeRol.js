const {User}=require("../../db")
const changeRol=async(userInfo)=>{
try {

    const user=await User.findOrCreate({
        where:{id:userInfo.userid},
        defaults:{username:userInfo.username,
            rol:userInfo.rol

        }
    })
} catch (error) {
    console.log(error.message);
}
}
module.exports=changeRol