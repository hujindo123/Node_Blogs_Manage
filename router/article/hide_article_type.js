/**
 * Created by Administrator on 2017/8/7.
 */
const express = require('express');
const router = express();
const {query} = require('../../db');

router.get ('/', (req, res, next) =>{
    let id = req.query.id;
    let mysql = 'update article_type set article_type_status =? where id = ?';
    query (mysql, [0, id],(err, rows, fields) =>{
        if (err)
            res.send(err)
        else
            res.send({
                code: 200,
                msg: '修改成功'
            })
    });
});
module.exports = router;