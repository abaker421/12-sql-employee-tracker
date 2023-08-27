const inquirer = require('inquirer')

inquirer.prompt({
    type: 'list',
    name: 'userSelection',
    message: 'What would you like to see?',
    choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role'],
    default: 'View all departments'
})
.then((answers) => {
console.log(answers)
})

