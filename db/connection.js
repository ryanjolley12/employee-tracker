// WORKED WITH ANI ON THIS FILE

const mysql = require("mysql2");


// Connect to database
const connection = mysql.createConnection({
    host: 'localhost',
    // Your MySQL username,
    user: 'root',
    // Your MySQL password
    password: 'password',
    port: 3306,
    database: 'employee_db'
});






module.exports = connection;