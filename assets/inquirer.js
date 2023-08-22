const inquirer = require('inquirer')

inquirer.prompt({
    type: 'list',
    name: 'userSelection',
    message: 'What would you like to see?',
    choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role'],
    default: 'view all departments'

}) .then((answers) => {
    
}) .catch (err) {

}