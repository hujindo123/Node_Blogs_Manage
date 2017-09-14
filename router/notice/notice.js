/**
 * Created by Administrator on 2017/7/30.
 */
const express = require('express');
const router = express();
const {query} = require("../../db/index");


router.get('/', (req, res, next) => {
    let title = req.query.title;
    let reason = req.query.reason;
    let content = req.query.content;
    let time = Date.now();
    if (req.level) {
        let mysql = "insert into notice(title, reason, content, u_id, createTime) values(?,?,?,?,?)";
        query(mysql, [title, reason, content, req.u_id, time], (err, rows, fileds) => {
            if (err) {
                res.send(err);
            } else {
                res.send({
                    code: 200,
                    mas: '上传成功'
                });
            }
        });
    } else {
        res.send({
            code: 200,
            mas: '权限不足'
        });
    }
});
module.exports = router;