// jwt
const jwt = require("jsonwebtoken");
const config = require("../config/index.js");
// model
const User = require("../database/models/User.js");

exports.newToken = (user) => {
  const payload = {
    username: user.username,
    _id: user.id,
  };

  return jwt.sign(payload, config.SECRET_KEY, {
    expiresIn: config.EXPIRATION_DATE,
  });
};

exports.verifyToken = token =>
  new Promise((resolve, reject) => {
    jwt.verify(token, config.SECRET_KEY, (err, payload) => {
      if (err) return reject(err);
      resolve(payload);
    });
  });

exports.authenticateUser = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: "token must be included" });
  }

  const token = req.headers.authorization;
  let payload;
  try {
    payload = await verifyToken(token);
  } catch (error) {
    return res.status(401).json({ message: "token is invalid" });
  }

  const user = await User.findOne({ where: { id: payload._id, username: payload.username } });

  if (!user) {
    return res.status(401).json({ message: 'user is not found' })
  }

  req.user = user;
  next();
};
