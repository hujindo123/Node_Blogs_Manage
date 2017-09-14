/**
 * Created by Administrator on 2017/7/30.
 */
const express = require('express');
const router = express();
const {query} = require("../db/index");


router.get('/', (req, res, next) => {
    let title = req.query.title;
    let select = req.query.select;
    let content = req.query.content;
    let time = Date.now();
    let mysql = "insert into article(art_title, artType_id, art_content, u_id, art_createTime) values(?,?,?,?,?)";
    query(mysql, [title, select, content, req.u_id, time], (err, rows, fileds) => {
        if (err) {
            res.send(err);
        } else {
           res.send({
               code: 200,
               mas: '上传成功'
           })
        }
    });

});
module.exports = router;