/**
 * Created by Administrator on 2017/8/2.
 */
const express = require('express');
const router = express();
const {query} = require('../db/index');
router.get('/', (req, res, next) => {
    let mysql = "select * from user where u_id=?";
    query(mysql, [req.query.token], function (err, rows, fields) {
        if (err) {
            res.send(err)
        } else {
            if (rows.length > 0) {
                res.send({
                    data: rows,
                    code: 200,
                    msg: '获取成功'
                });
            } else {
                res.send({
                    code: -1,
                    msg: '暂无文章'
                });
            }
        }
    })
});
module.exports = router;