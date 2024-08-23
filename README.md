# RestAPI using - Express, Node JS & PostgreSQL

To create a postgreSQL connection with Node JS, we need to create a file where we need to import the 
...
const pool = new Pool({
user: process.env.POSTGRES_USER_ID,
host: process.env.POSTGRES_HOST,
database: process.env.POSTGRES_DATABASE,
password: process.env.POSTGRES_PASSWORD,
port: process.env.POSTGRES_PORT
})
...
To hide the confidential details like username, password or database name we can create a file ".env" it's a environment file to use direclty by 
...
import dotenv from "dotenv";

dotenv.config({
path: "./.env"
})
...
