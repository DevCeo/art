const { user } = require("../../models");
const { generateAccessToken, sendAccessToken } = require("../tokenFunction");
const bcrypt = require("bcrypt");

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userInfo = await user.findOne({
      where: {
        email: email,
      },
    });
    if (!userInfo) {
      return res.status(401).json({ status: false, message: "invalid user" });
    }
    const compare = await bcrypt.compare(
      password,
      userInfo.dataValues.password
    );
    if (!compare) {
      return res.status(401).json({ status: false, message: "Login falied" });
    } else {
      delete userInfo.dataValues.password;
      const accessToken = generateAccessToken(userInfo.dataValues);
      sendAccessToken(res, accessToken);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: false, message: "sever err" });
  }
};
