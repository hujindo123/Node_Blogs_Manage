/**
 * Created by Administrator on 2017/8/2.
 */
const express = require('express');
const router = express();
const {query} = require('../db/index');
router.get('/', (req, res, next) => {
    let typeId = req.query.id;
    let mysql = 'update articletype, article  set articletype.art_show=? and article.art_show = ? where type.artType_id=?';
    query(mysql, [0, typeId], (err, val, fileds) => {
        if (err) {
            res.send(err);
        } else {
            res.send({
                code: 200,
                msg: '删除成功'
            });
        }

    });
});
module.exports = router;