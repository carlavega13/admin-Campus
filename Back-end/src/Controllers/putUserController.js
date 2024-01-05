const { User } = require("../db");
const editUserMoodle = require("./usersControlllers/editUserMoodle");
const putUserController = async ({
  firstName,
  lastName,
  dni,
  phone,
  email,
  id,
  domain,
  token,
}) => {
  try {
    const userToEdit = await User.findOne({ where: { id: id } });
    const editMoodle = await editUserMoodle({
      domain: domain,
      token: token,
      info: {
        id: id,
        firstname: firstName,
        lastname: lastName,
        phone1: phone,
      },
    });
    let info = {
      firstname: firstName,
      lastname: lastName,
      fullname: `${firstName} ${lastName}`,
      phone: phone,
 
    };
    if(email){
      info.email=email
    }
    let res
    if (dni && dni.toString().length > 5) {
      // info.dni = dni.toString();
   res = await userToEdit.update({
        ...info,
      dni:dni.toString()
      });
      return {
        id: res.id,
        username: res.username,
        token: res.token,
        rol: res.rol,
        isSuperAdmin: res.isSuperAdmin,
        firstname: res.firstname,
        lastname: res.lastname,
        phone: res.phone,
        email: res.email,
        fullname: `${res.firstname} ${res.lastname}`,
        domain: domain,
      };
    } else {
      res = await userToEdit.update(info);

      return {
        id: res.id,
        username: res.username,
        token: res.token,
        rol: res.rol,
        isSuperAdmin: res.isSuperAdmin,
        firstname: res.firstname,
        lastname: res.lastname,
        phone: res.phone,
        email: res.email,
        fullname: `${res.firstname} ${res.lastname}`,
        domain: domain,
      };
    }
  } catch (error) {
console.log(error.message);
    throw new Error(error.message);
  }
};
module.exports = putUserController;
