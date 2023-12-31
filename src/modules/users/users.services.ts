import { RowDataPacket } from "mysql2/promise";
import { pool } from "../../utils/database";

export const createUsersTableService = async () => {
  const [query] = await pool.promise().query(`
        CREATE TABLE users (
            user_id INT PRIMARY KEY AUTO_INCREMENT,
            role_id INT,
            username VARCHAR(50) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            FOREIGN KEY (role_id) references roles(role_id)
        );
    `);
  return query;
};

export const findOneUserService = async (data: string) => {
  const [query]: [RowDataPacket[], any] = await pool.promise().query(
    `
        SELECT * FROM users WHERE user_id = ? OR username = ?;
    `,
    [data, data]
  );
  return query;
};

export const addUserService = async (userId: string) => {
  const [query]: [RowDataPacket[], any] = await pool.promise().query(
    `
        INSERT INTO users (user_id,username,password)
        VALUES (?,?,?)
        ;
    `,
    [userId]
  );
  return query;
};
 
export const deleteOneUserService = async (userId: string) => {
  const [query]: [RowDataPacket[], any] = await pool.promise().query(
    `
        DELETE FROM users WHERE user_id = ?;
    `,
    [userId]
  );
  return query;
};
