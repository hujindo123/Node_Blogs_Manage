/**
 * Created by Administrator on 2017/8/7.
 */
const express = require('express');
const router = express();
const {query} = require('../../db');

router.get ('/', (req, res, next) =>{
    if (req.level) {
        let mysql = 'select * from article_type where article_type_status =?';
        query (mysql, [0],(err, rows, fields) =>{
            if (err)
                res.send(err)
            else
                res.send({
                    code: 200,
                    data: rows,
                    msg: '获取成功'
                })
        });
    }else{
        res.send({
            code: 200,
            mas: '权限不足'
        });
    }

});
module.exports = router;