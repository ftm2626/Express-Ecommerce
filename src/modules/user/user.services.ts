import { RowDataPacket } from "mysql2/promise";
import { pool } from "../../utils/database";
import { createUserT, updataUserT } from "./user.model";

export const createUsersTableService = async () => {
  const query = pool.promise().query(`
        CREATE TABLE IF NOT EXISTS users (
            user_id INT PRIMARY KEY AUTO_INCREMENT,
            first_name VARCHAR(50),
            last_name VARCHAR(50) NOT NULL,
            email VARCHAR(30) UNIQUE, 
            password VARCHAR(100) NOT NULL,
            role VARCHAR(20) DEFAULT "user"
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        );
    `);
  return query;
};

export const createUserService = async (info: createUserT) => {
  await createUsersTableService();
  const query = pool.execute(
    `
      INSERT INTO users (first_name, last_name, email, password)
      VALUES (?,?,?,?);
    `,
    [info.first_name, info.last_name, info.email, info.password]
  );
  return query;
};

export const getAllUsersService = async () => {
  const [query] = await pool.promise().query(
    `
      SELECT * FROM users;
    `
  );
  return query;
};

export const getOneUserService = async (userId: number) => {
  const [query]: [RowDataPacket[], any] = await pool.promise().query(
    `
      SELECT * FROM users WHERE user_id = ?;
    `,
    [userId]
  );
  return query;
};

export const deleteOneUserService = async (userId: number) => {
  const [query] = await pool.promise().query(
    `
      DELETE FROM users WHERE user_id = ?;
    `,
    [userId]
  );
  return query;
};

export const updateUserService = async (info: updataUserT, userId: number) => {
  await createUsersTableService();
  const query = pool.execute(
    `
      INSERT INTO users (first_name, last_name, email, password)
      VALUES (?,?,?,?);
      UPDATE users 
        first_name = ?, 
        last_name = ?, 
        email = ?, 
      WHERE user_id = ?
    `,
    [info.first_name, info.last_name, info.email, userId]
  );
  return query;
};
