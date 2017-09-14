/**
 * Created by Administrator on 2017/8/4.
 */
/**
 * Created by Administrator on 2017/7/30.
 */
const express = require('express');
const router = express();
const {query} = require('../db/index');

router.get('/', (req, res, next) => {
    let mysql = 'select * from articletype';
    query(mysql, [], function (err, rows, fields) {
        if (rows.length > 0) {
            res.send({
                code: 200,
                data: rows,
                mag: '获取成功'
            })
        } else {
            res.send({
                code: -1,
                msg: '暂无分类'
            })
        }
    });
});
module.exports = router;