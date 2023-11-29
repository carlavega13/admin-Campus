const { User } = require("../db");
const bcryptjs = require("bcryptjs");
const loginController = require("./loginController");
const reloadUser = async (user) => {
  try {
    const userDB = await User.findOne({ where: { username: user.username } });
    if (bcryptjs.compareSync(userDB.password, user.hash)) {
      const res = await loginController({
        username: userDB.username,
        password: userDB.password,
      });
      return res;
    }
  } catch (error) {
    throw new Error(error.message)
  }
};
module.exports = reloadUser;
