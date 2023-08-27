const router = require('express').Router()
const departmentsRoutes = require('./departmentsRoutes')
const employeesRoutes= require('./employeesRoutes')
const rolesRoutes= require('rolesRoutes')

router.use('./api/departments', departmentsRoutes)
router.use('./api/employees', employeesRoutes)
router.use('./api/roles', rolesRoutes)

module.exports = router