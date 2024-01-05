const axios = require("axios");
const { User } = require("../../db");
const getUserController = require("../getUserController");


const postSuperAdmin = async ({ username, password, domain, isSuperAdmin }) => {
  try {
    const token = await axios.get(
      `${domain}login/token.php?username=${username}&password=${password}&service=moodle_mobile_app`
    );
    
    // return info
    if (token.data.token) {
      const existingUser = await User.findOne({
        where: { username: username },
      });
      if (existingUser) {
        await existingUser.update({
          isSuperAdmin: isSuperAdmin,
          rol: "administrador",
        });

        return "Se creo el Super Administrador";
      } else {
        const info = await getUserController({
          domain: domain,
          username: username,
          password: password,
          rol: "estudiante",
        });
        await User.create({
          ...info,
          token: token.data.token,
          username: username,
          password: password,
          isSuperAdmin: isSuperAdmin,
          rol: "administrador",
        });
        return "Se creo el Super Administrador";
      }
    } else {
      throw new Error("No hay usuario existente para esas credenciales.");
    }
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};
module.exports = postSuperAdmin;
