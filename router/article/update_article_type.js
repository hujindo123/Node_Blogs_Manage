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
        let id = req.query.id;
        let mysql = 'update article_type set article_type_name =?, article_type_info = ? where id = ?';
        query(mysql, [type, desc, id], (err, rows, fields) => {
            if (err)
                res.send(err)
            else
                res.send({
                    code: 200,
                    msg: '修改成功'
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