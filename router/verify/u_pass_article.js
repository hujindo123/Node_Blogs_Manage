/**
 * Created by Administrator on 2017/8/4.
 */
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
const {query} = require('../../db/index');
router.get('/', (req, res, next) => {
    let art_id = req.query.art_id;
    let art_reason = req.query.art_reason;
    let time = Date.now();
    let mysql = "update article set article_pass_status = ?,article_verify_time = ?, article_reason = ? where article_id = ?";
    query(mysql, [-1, time, art_reason, art_id], function (err, rows, fields) {
        if (err) {
            res.send(err);
        } else {
            res.send({
                data: 'ok',
                code: 200,
                msg: '操作成功'
            });
        }
    })
});
module.exports = router;