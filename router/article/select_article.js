/**
 * Created by Administrator on 2017/8/7.
 */
const express = require('express');
const router = express();
const {query} = require('../../db');

router.get('/', (req, res, next) => {
    let id = req.query.id;
    let mysql = 'select article_title, article_content,article_create_time from article where article_id = ?';
    query(mysql, [id], (err, rows, fields) => {
        if (err)
            res.send(err)
        else
            res.send({
                data: rows[0],
                code: 200,
                msg: '获取成功'
            })
    });
});
module.exports = router;