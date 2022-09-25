var mysql = require('mysql');
var dbConnect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Lieutuanvu',
    database: 'nien_luan'
});

dbConnect.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
    // var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
    // connection.query(sql, function (err, result) {
    //     if (err) throw err;
    //     console.log("Table created");
    // });
});
module.exports = dbConnect;