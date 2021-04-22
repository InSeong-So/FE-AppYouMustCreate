const model = require("../../database/models/index.js");
const { newToken } = require("../../utils/auth.js")

// req : request 정보
// res : response 정보, json() 함수를 통해 반환 값을 설정
// next : 미들웨어 - 이벤트 헨들링 설정
const findAll = async (req, res, next) => {
  const users = await model.User.findAll();
  return res.json(users);
};

const findOne = async (req, res, next) => {
  const user = await model.User.findOne(
    {
      where: {
        username: req.body.username,
        password: req.body.password
      }
    }
  );
  const userData = { id: user.dataValues.id, username: user.dataValues.username };
  const token = newToken(userData);
  console.log(token);

  return res.json(user);
};

module.exports = {
  findAll,
  findOne,
};
