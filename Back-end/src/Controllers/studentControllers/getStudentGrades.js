const axios = require("axios");

const getStudentGrades = async ({ token, domain, courseid, userid }) => {
  try {
    console.log(token, domain, courseid, userid);
    const params = {
      wstoken: token,
      wsfunction: "gradereport_user_get_grade_items",
      moodlewsrestformat: "json",
      courseid: Number(courseid),
      userid: Number(userid),
    };
    const res = await axios(`${domain}webservice/rest/server.php`, { params });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};
module.exports = getStudentGrades;
// gradereport_user_get_grade_items
