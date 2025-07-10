import mysql from "mysql2/promise";

// 1: connect to mysql server 
const db = await mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"@Apu1234",
    database:"mysql_db",
});
console.log("MySql Connected Successfully");

// 2: we need to create a db
// await db.execute(`create database mysql_db`);
// console.log( await db.execute('show databases'));


// 3: then we need to create a table 
await db.execute(`
    create table users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
    )
    `);
// 4: need to perform CURD operations 