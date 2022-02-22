require("dotenv").config();
const { sign, verify } = require("jsonwebtoken");

module.exports = {
  generateAccessToken: (data) => {
    return sign(data, process.env.ACCESS_SECRET, { expiresIn: "2h" });
  },
  isAuthorized: (req) => {
    const jwt = req.cookies.jwt;
    //cookie에 jwt 토큰이 없는 요청
    if (!jwt) return null;
    //cookie에 jwt 토큰 요청
    try {
      return verify(jwt, process.env.ACCESS_SECRET);
    } catch (err) {
      // 토큰이 유효 x
      return null;
    }
  },
  sendAccessToken: (res, accessToken) => {
    res
      .cookie("accessToken", accessToken, {
        httpOnly: true,
        sameSite: "none",
        secure: true,
      })
      .sendStatus(200);
  },
  sendRefreshToken: (res, refreshToken) => {
    res.cookie("refreshToken", refreshToken),
      {
        httpOnly: true,
        sameSite: "none",
        secure: true,
      }.sendStatus(200);
  },
  checkRefreshToken: (refreshToken) => {
    try {
      return verify(refreshToken, process.env.ACCESS_SECRET);
    } catch (err) {
      //토큰 유효 x
      return null;
    }
  },
};
