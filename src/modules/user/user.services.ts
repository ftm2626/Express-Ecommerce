import { pool } from "../../utils/database";
import { createUserT } from "./user.model";

export const createUsersTableService = async () => {
  const query = pool.promise().query(`
        CREATE TABLE IF NOT EXISTS users (
            user_id INT PRIMARY KEY AUTO_INCREMENT,
            first_name VARCHAR(50),
            last_name VARCHAR(50) NOT NULL,
            email VARCHAR(30) UNIQUE, 
            password VARCHAR(100) NOT NULL,
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
