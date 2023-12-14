/**
 * arquivo: server.js
 * descrição: arquivo responsavel por toda a configuração e execução do Back-End('Employee')
 * data: 13/12/2023
 * author: Paulo Brandão 
 */

const app = require('./src/app');

const port = process.env.PORT || 3010;

app.listen(port, () => {
  console.log('Aplicação sendo executada na porta:', port);
});