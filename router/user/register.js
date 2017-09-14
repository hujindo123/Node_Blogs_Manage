/**
 * Created by Administrator on 2017/7/27.
 */
const express = require('express');
const router = express();
const {query} = require("../../db/index");

router.post('/', function (req, res) {
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
    let sex = req.body.sex;
    /* 检查重名 */
    let mysql = 'select username from user where username=?';
    query(mysql, [username], function (err, val, fileds) {
        if (err) {
            res.send(err);
        } else {
            if (val.length > 0) {
                res.send({
                    code: -1,
                    msg: '用户已存在，请换一个用户名',
                    type: -1
                });
            } else {
                mysql = 'insert into user(username, password, email, sex) values(?,?,?,?)';
                query(mysql, [username, password, email, sex], function (err, val, fileds) {
                    if (err) {
                        res.send(err);
                    } else {
                        res.send({
                            code: 200,
                            msg: '注册成功'
                        });
                    }
                });
            }
        }
    });
});
module.exports = router;