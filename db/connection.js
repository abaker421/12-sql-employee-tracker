const mysql = require('mysql2')


const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'employees_db'
})

module.exports= connection