const model = require("../../database/models/index.js");

// req : request 정보
// res : response 정보, json() 함수를 통해 반환 값을 설정
// next : 미들웨어 - 이벤트 헨들링 설정
const findAll = async (req, res, next) => {
  const todos = await model.Todo.findAll();
  return res.json(todos);
};

const findOne = async (req, res, next) => {
  const { username, password } = "tester-0";
  return await res.json(model.Todo.findOne({ where: { useranme } }));
};

module.exports = {
  findAll,
  findOne,
};
