import dontev from "dotenv";
import mysql from "mysql2/promise";

dontev.config();

// 1: connect to mysql server
const db = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});
console.log("MySql Connected Successfully");

// 2: we need to create a db
// await db.execute(`create database mysql_db`);
// console.log( await db.execute('show databases'));

// 3: then we need to create a table
await db.execute(`
    CREATE TABLE IF NOT EXISTS users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
    )
    `);
console.log("Table ready");

// 4: need to perform CURD operations
// await db.execute(
//     `insert into users(username, email) values(?,?)`,
//     ['Dipu','dipu@gmail.com']
// );
//     console.log("Data insert successfully");

// const values = [
//   ["Apu", "apu@testmail.com"],
//   ["Dipu", "dipu@testmail.com"],
//   ["Rafi", "rafi@testmail.com"],
//   ["Nitu", "nitu@testmail.com"],
//   ["Mim", "mim@testmail.com"],
//   ["Tushar", "tushar@testmail.com"],
// ];

// await db.query("insert into users (username,email) values(?,?)",
//     [values]);

const [rows] = await db.execute(`select * from users`);
console.log(rows);

// update
// try {
//     const [rows] = await db.execute(
//         `update users set username= ? where email= ?`,
//         ["Nur Mohammad Apu", "dipu@gmail.com"]
//     )
//     console.log("All users:", rows);
// } catch (err) {
//     console.error(err);
// }


// delete
// try {
//     const [rows] = await db.execute(
//         `DELETE FROM users WHERE email = ?`,["dipu@gmail.com"]
//     )
//     console.log("All users:", rows);
// } catch (err) {
//     console.error(err);
// }