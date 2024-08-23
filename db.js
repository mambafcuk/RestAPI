const Pool = require('pg').Pool;
const dotenv = require('dotenv')


dotenv.config({
    path: '.env'
})

const pool = new Pool({
    user: process.env.POSTGRES_USER_ID,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DATABASE,
    password: process.env.POSTGRES_PASSWORD,
    port : process.env.POSTGRES_PORT
})

console.log(process.env.POSTGRES_DATABASE)

module.exports = pool;



