const router= require('express').Router()
const connection = require('../db/conneciton.js')
const inquirer= require('inquirer')

const viewAllRoles = () => {
    console.log('All Roles:')
    let query= `SELECT * FROM roles`
    connection.query(query, (err, rows) => {
        if (err) {console.log(err)}
        console.table(rows)
    })
    console.log()
}


module.exports= router