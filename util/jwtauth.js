/**
 * Created by Administrator on 2017/7/31.
 */
const jwt = require('jsonwebtoken');//用来创建和确认用户信息摘要
// 检查用户会话
module.exports = (req, res, next) => {
    /*   console.log('检查post的信息或者url查询参数或者头信息'); */
    //检查post的信息或者url查询参数或者头信息
    let token = (req.body && req.body.token) || (req.query && req.query.token) || req.headers['x-access-token'];
    // 解析 token
    let ua = req.headers["user-agent"];
    if (token) {
        // 确认token
        jwt.verify(token, 'secret', function (err, decoded) {
            if (err) {
                res.send({success: false, message: 'token信息错误.', code: -400});
            } else {
                // 如果没问题就把解码后的信息保存到请求中，供后面的路由使用
                req.ua = decoded.ua;
                if (req.ua == ua) {
                    req.u_id = decoded.data;
                    req.level = decoded.level != 0 ? decoded.level : false; // 如果不等于0 则就是管理员 并进行赋值
                    next();
                } else {
                    // 如果没有token，则返回错误
                    res.send({
                        success: false,
                        code: -400,
                        message: 'token失效！'
                    });
                }
            }
        });
    } else {
        // 如果没有token，则返回错误
        res.send({
            success: false,
            code: -400,
            message: '没有提供token！'
        });
    }
};
