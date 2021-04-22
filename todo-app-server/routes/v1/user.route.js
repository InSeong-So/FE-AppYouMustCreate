const express = require("express");
const router = express.Router();
const model = require("../../database/models/index.js");
const bcrypt = require('bcrypt-nodejs');
const { newToken } = require('../../utils/auth.js');

// 모든 인원 가져오기 : 개발단계에서만 실행
router.get("/all", (req, res) => {
    model.User.findAll()
        .then(users => {
            res.send(users);
        })
        .catch(error => {
            console.log(error);
            res.status(409).send(error);
        })
});

// 로그인
router.post("/login", (req, res) => {
    model.User.findOne({ where: { username: req.body.username } })
        .then((user) => {
            if (!user) {
                res.status(401).send('Authentication failed. User not found.');
            }

            const userInfo = {
                username: user.dataValues.username,
                id: user.dataValues.id
            }

            bcrypt.compare(req.body.password, user.dataValues.password, (error, result) => {
                if (error) {
                    res.status(500).send('Internal Server Error');
                }
                if (result) {
                    const token = newToken(userInfo);

                    res.status(200).json({
                        success: true,
                        username: userInfo.username,
                        message: 'Login Success',
                        token: token
                    });
                } else {
                    res.status(401).json('Authentication failed. Wrong password');
                }
            });
        }).catch((err) => {
            res.status(500).json('Internal Server Error');
            throw error;
        });
});

// 회원가입
router.post("/signup", (req, res) => {
    const { username, password } = req.body;
    bcrypt.hash(password, 10, (error, hashedPassword) => {
        if (error) {
            console.log(err);
            return res.status(500).json({ error });
        }

        model.User.create({ username: username, password: hashedPassword })
            .then((error, user) => {
                if (error) {
                    res.status(409).send(error);
                }
            }).catch(error => {
                console.log(error);
                res.send(user);
            })
    });
})

module.exports = router;