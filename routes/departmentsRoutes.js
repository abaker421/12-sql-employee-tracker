const router= require('express').Router()
const connection = require('../db/connection.js')
const inquirer = require('inquirer')

const viewAllDepartments = () => {
    console.log('All Departments:')
    const query= `SELECT * FROM departments`
    connection.query(query, (err, rows) => {
        if (err) {console.log(err)}
        console.table(rows)
    })
    console.log()
}

const addDepartment = () => {
    inquirer.prompt([
        {name: 'name',
        type: 'input',
        message: "Name the department to be added:"}
    ])
    .then(function(answer) {
    const query= `INSERT INTO departments (name) VALUES (?)`
    connection.query(query, [answer.name], 
    function(err, res, fields){
        if (err) throw err
        console.log('Department Successfully Added!')
    })
})
}

module.exports= router