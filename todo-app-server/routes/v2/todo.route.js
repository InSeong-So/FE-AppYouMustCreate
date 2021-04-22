const exporess = require("express");
const router = exporess.Router();
const model = require("../../database/models/index.js");

// 나의 모든 todo리스트 가져오기
router.get("/:username", (req, res) => {
    model.Todo.findAll({ where: { author: req.params.username } })
        .then((todo) => {
            res.status(200).send(todo.defaultValues);
        })
        .catch(error => {
            res.status(500).json('Internal Server Error');
            throw error;
        });
});


module.exports = router;
