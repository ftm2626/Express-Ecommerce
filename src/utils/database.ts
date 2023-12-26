import mysql from "mysql2";

export const pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "Jasi@1998",
  database: "express-ecommerce",
  port: 3306,
});
