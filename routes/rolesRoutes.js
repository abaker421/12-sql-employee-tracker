const router= require('express').Router()
const connection = require('../db/connection.js')
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

const addRole = () => {
    inquirer.prompt([
        {
            name: 'title',
            type: 'input',
            message: 'What is the title of the new role?'
        },
        {
            name: 'salary',
            type: 'input',
            message: 'What is the starting salary for the new role?'
        },
        {
            name: 'department_id',
            type: 'input',
            message: 'What is the ID number of the deparment oif the role?'
        }
    ])
    .then(function(answer){
        let query = `INSERT INTO roles (title, salary, department_id) VALUES (?,?,?)`
        connection.query(query, [answer.title, answer.salary, answer.department_id],
            function (err, res, fields) {
                if (err) throw err
                console.log('Role Added Successfully!')
            })
    })
}

addRole()

module.exports= router