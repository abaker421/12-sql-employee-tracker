const router= require('express').Router()
const connection = require('../db/connection.js')

const viewAllEmployees = () => {
    console.log('All Employees:')
    const query= `SELECT * FROM employees`
    connection.query(query, (err, rows) => {
        if (err) {console.log(err)}
        console.table(rows)
    })
    console.log()
}

viewAllEmployees()

module.exports= router