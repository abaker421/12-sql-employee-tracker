const inquirer = require('inquirer')
const {
    viewAllDepartments,
    addDepartment,
    viewAllEmployees,
    addEmployee,
    updateEmployee,
    viewAllRoles,
    addRole,
    exitMenu
} = require('./utils/userSelectionFunctions')

inquirer.prompt({
    type: 'list',
    name: 'userSelection',
    message: 'What would you like to see?',
    choices: ['View all departments', 
    'View all roles', 
    'View all employees', 
    'Add a department', 
    'Add a role', 
    'Add an employee', 
    'Update an employee role',
    'Exit the application'],
    default: 'View all departments'
})
.then((answers) => {
    switch(answers.userSelection) 
    {
        case "View all departments":
            viewAllDepartments()
            break;
        case "View all roles":
            viewAllRoles()
            break;
        case "View all employees":
            viewAllEmployees()
            break;
        case "Add a department":
            addDepartment()
            break;
        case 'Add a role':
            addRole()
            break;
        case 'Add an employee':
            addEmployee()
            break;
        case 'Update an employee role':
            updateEmployee()
            break;
        case 'Exit the application':
            console.log('Take care!')    
            exitMenu()
        }
}) .catch( (err) => {
    console.error(err)
})