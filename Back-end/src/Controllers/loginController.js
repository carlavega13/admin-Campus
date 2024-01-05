const { User, Domain } = require("../db");
const axios = require("axios");
const postUser = require("./dbControllers/postUser");
const getUserController = require("./getUserController");
const loginController = async (user) => {
  try {
    const find = await User.findOne({ where: { username: user.username } });
   
    const findUrl = await Domain.findOne({ where: { isActive: true } });
    const token = await axios.get(
      `${findUrl.url}login/token.php?username=${user?.username}&password=${user?.password}&service=moodle_mobile_app`
    );
    if (token.data.error) {
      throw new Error(
        "no fue posible iniciar sesion por favor revise su informacion y vuelva a intentarlo"
      );
    }
    if (!find) {
      const info = await getUserController({
        domain: findUrl.url,
        username: user.username,
        password: user.password,
        rol: "estudiante",
      });

      const response = await postUser({
        ...user,
        id: info.id,
        token: token.data.token,
        domain: findUrl.url,
      });

      return {
        ...info,
        rol: response.rol,
        token: token.data.token,
        domain: findUrl.url,
        isSuperAdmin:response.isSuperAdmin
      };
    }
    if (find.token !== token.data.token) {
      await find.update({ token: token.data.token });
    }
    if(!find.password){
await find.update({password:user.password,domain:user.doamin})
    }
    const info = await getUserController({
      domain: findUrl.url,
      username: find.username,
      password: find.password,
      rol: find.rol,
      isSuperAdmin: find.isSuperAdmin,
    });
if(!find.email){
  await find.update({email:info.email})
}
    return {
      ...info,
      phone: find.phone,
      rol: find.rol,
      token: token.data.token,
      domain: findUrl.url,
      isSuperAdmin:find.isSuperAdmin
    };
  } catch (error) {
    throw new Error(error.message);
  }
};
module.exports = loginController;
