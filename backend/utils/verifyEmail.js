const axios = require("axios");

const EMAIL_VALIDATION_API = process.env.EMAIL_VALIDATION_API;

const verifyEmail = async (email) => {
  try {
    const { data } = await axios.get(
      `${EMAIL_VALIDATION_API}=${email}`
    );

    return data.is_valid_format.value && data.deliverability == "DELIVERABLE";
  } catch (err) {
    console.error("Email verification failed", err);
    return false;
  }
};

module.exports = verifyEmail;
