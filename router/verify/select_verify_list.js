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
    let mysql = "select article.article_id,  article.article_title,  article.article_create_time,  article_type.article_type_name," +
        "user.nickname from article, article_type, user " +
        "where article.article_type_id = article_type.id AND user.u_id = article.u_id AND article.article_pass_status = ?";
    query(mysql, [0], function (err, rows, fields) {
        if (err) {
            res.send(err)
        } else {
            if (rows.length > 0) {
                res.send({
                    data: rows,
                    code: 200,
                    msg: '获取成功'
                });
            } else {
                res.send({
                    code: -1,
                    msg: '暂无申请文章'
                });
            }
        }
    })
});
module.exports = router;