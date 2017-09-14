/**
 * Created by Administrator on 2017/7/27.
 */
const express = require("express");
const http = require("http");
var history = require('connect-history-api-fallback');

const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(history());
history({
    index: '/default.html'
});
const jwtauth = require('./util/jwtauth');

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    /*res.header("Content-Type", "application/json;charset=utf-8")*/
    next();
});

app.all('/api/*', jwtauth);
// login api
app.use('/login', require('./router/user/login')); // 登录
app.use('/register', require('./router/user/register')); // 注册

app.use('/api/notice', require('./router/notice/notice')); // 添加公告

app.use('/api/select_article_type', require('./router/article/select_article_type')); // 文章类型
app.use('/api/add_article_type', require('./router/article/add_article_type')); // 添加文章类型
app.use('/api/update_article_type', require('./router/article/update_article_type')); // 修改文章类型
app.use('/api/hide_article_type', require('./router/article/hide_article_type')); // 隐藏文章类型
app.use('/api/show_article_type', require('./router/article/show_article_type')); // 显示文章类型
app.use('/api/show_unselsect_article_type', require('./router/article/show_unselsect_article_type')); // 显示未显示文章类型

// 审核列表
app.use('/api/select_verify_list', require('./router/verify/select_verify_list')); // 文章审核列表
app.use('/api/select_article', require('./router/article/select_article')); // 查询文章内容
app.use('/api/u_pass_article', require('./router/verify/u_pass_article')); // 未审核通过
app.use('/api/select_verify_log_time', require('./router/verify/select_verify_log_time')); // 时间查询
app.use('/api/select_verify_list_time', require('./router/verify/select_verify_list_time')); // 时间查询

app.use('/api/addArt', require('./router/addArt')); // 添加文章
app.use('/api/delType', require('./router/delType')); // 删除文章类型
app.use('/api/getartList', require('./router/getartList')); // 获取用户文章
app.use('/api/verify_pass_article', require('./router/verify/verify_pass_article')); // 审核通过 文章
app.use('/api/select_verify_log', require('./router/verify/select_verify_log')); // 查询审核日志
app.use('/api/cancleArtLog', require('./router/cancleArtLog')); // 撤销记录中的一条数据
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server is run ${port}`)
});
module.exports = app;