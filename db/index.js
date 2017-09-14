/**
 * Created by Administrator on 2017/7/27.
 */
var mysql = require('mysql');
var pool = mysql.createPool({
    host: '47.93.236.234', // localhost
    user: 'root',
    password: 'hujindong',
    database: 'blogs',
    port: 3306
});
function query(sql, param, callback) {
    pool.getConnection(function (err,conn) {
        if(err){
            callback(err,null,null);
        }else {
            conn.query(sql, param, function (err, val, fields) {
                // 释放连接
                conn.release();
                // 事件驱动回调
                callback(err,val,fields);
            });
        }
    });
};
module.exports = {
    query
}