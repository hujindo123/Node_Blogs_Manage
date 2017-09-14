/**
 * Created by Administrator on 2017/8/4.
 */
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
    let mysql = "select" +
        " article.article_id," +
        " article.article_title," +
        " article.article_verify_time," +
        " article.article_reason," +
        " article.article_pass_status," +
        " article.article_create_time," +
        " article.verify_user_name," +
        " article_type.article_type_name," +
        " user.nickname " +
        " from" +
        " article, article_type, user" +
        " where " +
        " article.article_type_id = article_type.id " +
        " AND " +
        " user.u_id = article.u_id " +
        " AND " +
        " article.article_pass_status != ?";
    query(mysql, [0], function (err, rows, fields) {
        if (err) {
            res.send(err)
        } else {
            res.send({
                data: rows,
                code: 200,
                msg: '获取成功'
            });
        }
    })
});
module.exports = router;