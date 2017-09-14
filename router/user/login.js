/**
 * Created by Administrator on 2017/7/27.
 */
const express = require("express");

const moment = require('moment');
const jwt = require('jsonwebtoken');

const {query} = require("../../db/index");
const router = express();
router.get('/', (req, res, next) =>{

});
router.post('/', (req, res, next) => {
    let mysql = "select * from user where username=?";
    let username = req.body.username;
    let password = req.body.password;
    query(mysql, [username], function (err, rows, fields) {
        if (err) {
            res.send(err)
        } else {
            if (rows.length > 0 && rows[0].password == password) {
                let expires = moment().add('hours', 7).valueOf();
                let token = jwt.sign({
                    exp: expires,
                    level: rows[0].level,
                    data: rows[0].u_id,
                    ua: req.headers['user-agent']
                }, 'secret');
                res.send({
                    level: rows[0].level,
                    token: token,
                    expires: expires,
                    code: 200,
                    msg: '登录成功'
                });
            } else {
                res.send({
                    code: -1,
                    msg: '密码和账号不匹配'
                });
            }
        }
    })
});
module.exports = router;