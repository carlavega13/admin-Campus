const sgMail = require("./sendGridSetApiKey");
const mail=require("./htmlSendGrid")
const postMailController = async (info) => {
  try {
    const mailToSend=mail(info.text)

    const msg = {
      subject:info.subject,
      to:info.to,
     html:mailToSend,
      from: "ad.campus.13@gmail.com",
    };
    const response = await sgMail.send(msg);
    return response;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};
module.exports = postMailController;
