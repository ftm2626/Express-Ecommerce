import { pool } from "../../utils/database";

export const createRolesTableService = async () => {
  const query = pool.promise().query(`
        CREATE TABLE IF NOT EXISTS roles (
            role_id INT PRIMARY KEY AUTO_INCREMENT,
            role_name VARCHAR(50) NOT NULL UNIQUE,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        );
    `);
  return query;
};

export const addRoleService = async (role:string) => {
  const query = pool.promise().query(`
        INSERT INTO roles (role_name) VALUES (?);
    `,[role]);
  return query;
};
