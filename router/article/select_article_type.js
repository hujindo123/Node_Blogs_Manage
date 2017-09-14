/**
 * Created by Administrator on 2017/7/30.
 */
const express = require('express');
const router = express();
const {query} = require('../../db/index');

router.get('/', (req, res, next) => {
    if (req.level) {
        let mysql = 'select * from article_type where article_type_status =?';
        query(mysql, [1], function (err, rows, fields) {
            if (err)
                res.send(err);
            else
                var msg = rows.length > 0 ? '获取成功' : '暂无分类';
            res.send({
                code: 200,
                data: rows,
                msg: msg
            });
        });
    }else {
        res.send({
            code: 200,
            mas: '权限不足'
        });
    }

});
module.exports = router;