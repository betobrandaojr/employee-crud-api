/**
 * arquivo: database.js
 * descrição: arquivo responsável pelas connections strings 
 * data: 13/12/2023
 * author: Paulo Brandão
 */

const { Pool } = require('pg');
const dotenv = require('dotenv');
const { param } = require('../routes');

dotenv.config();

// => Conexão db

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on('error', (err, client) => {
  console.log('Unexpected error on idle client', err)
  process.exit(-1);
});

pool.on('connect', () => {
  console.log('Conexão bem sucedida!')
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};