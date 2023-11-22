const { User } = require("../db");
const editUserMoodle = require("./usersControlllers/editUserMoodle");
const putUserController = async ({
  firstName,
  lastName,
  DNI,
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
      email: email,
    };
    if (DNI && DNI.length > 5) {
      info.dni = DNI.toString();
    } else {
      const res = await userToEdit.update(info);
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
    throw new Error(error.message);
  }
};
module.exports = putUserController;
