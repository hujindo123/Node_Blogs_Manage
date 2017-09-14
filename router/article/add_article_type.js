/**
 * Created by Administrator on 2017/8/7.
 */
const express = require('express');
const router = express();
const {query} = require('../../db');

router.get('/', (req, res, next) => {
    if (req.level) {
        let type = req.query.type;
        let desc = req.query.desc;
        let mysql = 'insert into article_type(article_type_name, article_type_info) values(?,?)';
        query(mysql, [type, desc], (err, rows, fields) => {
            if (err)
                res.send(err)
            else
                res.send({
                    code: 200,
                    msg: '添加成功'
                })
        });
    } else {
        res.send({
            code: 200,
            mas: '权限不足'
        });
    }
});
module.exports = router;