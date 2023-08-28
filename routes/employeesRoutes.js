const router= require('express').Router()
const connection = require('../db/connection.js')
const inquirer= require('inquirer')

const viewAllEmployees = () => {
    console.log('All Employees:')
    let query= `SELECT * FROM employees`
    connection.query(query, (err, rows) => {
        if (err) {console.log(err)}
        console.table(rows)
    })
    console.log()
}

const addEmployee = () => {
    inquirer.prompt([
        {
            name: 'first_name',
            type: 'input',
            message: "What is the their first name?"
        },
        {
            name: 'last_name',
            type: 'input',
            message:"What is their last name?",
        },
        {
            name: 'role_id',
            type: 'input',
            message:'What is the role ID for the employee?'
         },
         {
            name: 'manager_id',
            type: 'input',
            message: 'What is the Employee ID of their manager? Type 0 if no manager'
        }
    ])
    .then(function(answer){
        let query = `INSERT INTO employees(first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`
        connection.query(query, [answer.first_name, answer.last_name, answer.role_id, answer.manager_id],
            function (err, res, fields) {
                if (err) throw err
                console.log('Employee Added Successfully!')
            })
    })
}

const updateEmployee = () => {
    inquirer.prompt([
        {
            name: 'updateID',
            type:   'input',
            message: 'Type the ID of the employee you wish to update'
        },
        {
            name: 'first_name',
            type: 'input',
            message: "What is the their first name?"
        },
        {
            name: 'last_name',
            type: 'input',
            message:"What is their last name?",
        },
        {
            name: 'role_id',
            type: 'input',
            message:'What is the role ID for the employee?'
         },
         {
            name: 'manager_id',
            type: 'input',
            message: 'What is the Employee ID of their manager? Type 0 if no manager'
        }
    ]).then ((answer) =>{
        let query= `UPDATE employees SET first_name=?, last_name=?, role_id=?, manager_id=? WHERE ID=?`
        connection.query(query, [answer.first_name, answer.last_name, answer.role_id, answer.manager_id, answer.updateID],
            function (err, res, fields) {
                if (err) throw err
                console.log("Employee updated successfully!")
            })
    })
}

module.exports= router