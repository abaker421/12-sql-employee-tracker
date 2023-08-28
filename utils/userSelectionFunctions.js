const connection = require('../db/connection.js')
const inquirer = require('inquirer')

const viewAllDepartments = () => {
    console.log('All Departments:')
    let query= `SELECT * FROM departments`
    connection.query(query, (err, rows) => {
        if (err) {console.log(err)}
        console.table(rows)
        connection.end()
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
    let query= `INSERT INTO departments (name) VALUES (?)`
    connection.query(query, [answer.name], 
    function(err, res, fields){
        if (err) throw err
        console.log('Department Successfully Added!')
        connection.end()
    })
})
}

const viewAllEmployees = () => {
    console.log('All Employees:')
    let query= `SELECT * FROM employees`
    connection.query(query, (err, rows) => {
        if (err) {console.log(err)}
        console.table(rows)
    })
    connection.end()
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
        const managerId = answer.manager_id === '0' ? null : answer.manager_id
        //allows a 0 to be accepted and converted to null for teh database
        let query = `INSERT INTO employees(first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`
        connection.query(query, [answer.first_name, answer.last_name, answer.role_id, managerId],
            function (err, res, fields) {
                if (err) throw err
                console.log('Employee Added Successfully!')
                connection.end()
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
                connection.end()
            })
    })
}

const viewAllRoles = () => {
    console.log('All Roles:')
    let query= `SELECT * FROM roles`
    connection.query(query, (err, rows) => {
        if (err) {console.log(err)}
        console.table(rows)
    })
    connection.end()
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
                connection.end()
            })
    })
}

module.exports= {
    viewAllDepartments,
    addDepartment,
    viewAllEmployees,
    addEmployee,
    updateEmployee,
    viewAllRoles,
    addRole
}