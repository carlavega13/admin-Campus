const {User}=require("../../db")
const changeRol=async(userInfo)=>{
try {
    console.log(userInfo);
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