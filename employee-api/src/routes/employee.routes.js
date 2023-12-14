/**
 * arquivo: employees-routers.js
 * descrição: arquivo responsável pelas rotas da api
 * data: 13/12/2023
 * author: Paulo Brandão
 */

const router = require('express-promise-router')();
const employeeController = require('../controllers/employee.controller');

// ==> defininfo as rotas do grud 'employeee'

// ==> Rota responsável por criar um novo 'Colaborador(a)': (POST): localhost:3010/api/employees
router.post('/employees', employeeController.createEmployee);

// ==> Rota responsável por listar todos os 'Colaboradores': (GET): localhost:3010/api/employees
router.get('/employees', employeeController.listAllEmployees);

// ==> Rota responsável por listar um determinado 'Colaborador' por Id: (GET): localhost:3010/api/employees/:id
router.get('/employees/:id', employeeController.findEmployeeById)

// ==> Rota reponsável por atualizar um determinado 'Colaborador(a) por Id: (PUT): localhost:3010/api/employees/:id
router.put('/employees/:id', employeeController.updateEmployeeById)

// ==> Rota responsável por deletar/excluir um determinado 'Colaborador(a) por Id: localhost:3010/api/employees/:id
router.delete('/employees/:id', employeeController.deleteEmployeeById);

module.exports = router;