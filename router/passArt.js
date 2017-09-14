/**
 * Created by Administrator on 2017/8/3.
 */
/**
 * Created by Administrator on 2017/8/3.
 */
/**
 * Created by Administrator on 2017/8/2.
 */
const express = require('express');
const router = express();
const {query} = require('../db/index');
router.get('/', (req, res, next) => {
    let art_id = req.query.art_id;
    let time = Date.now();
    let mysql = "update article set art_pass = ?,art_verifyTime = ? where art_id = ?";
    query(mysql, [1, time, art_id], function (err, rows, fields) {
        if (err) {
            res.send(err);
        } else {
            res.send({
                data: rows,
                code: 200,
                msg: '审核成功'
            });
        }
    })
});
module.exports = router;