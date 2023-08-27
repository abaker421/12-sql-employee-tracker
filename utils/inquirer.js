const inquirer = require('inquirer')

inquirer.prompt({
    type: 'list',
    name: 'userSelection',
    message: 'What would you like to see?',
    choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role'],
    default: 'View all departments'
})
.then((answers) => {
    switch(answers.userSelection) {
        case "View all departments":
            console.log('Success')
            break;
        case "View all roles":
            console.log('')
            break;
        case "View all employees":
            console.log('')
            break;
        case "Add a department":
            console.log('')
            break;
        case 'Add a role':
            console.log('')
            break;
        case 'Add an employee':
            console.log('')
            break;
        case 'Update an employee role':
            console.log('')
            break;}
}) .catch( (err) => {
    console.error(err)
})


module.exports= questions