import { RowDataPacket } from "mysql2/promise";
import { pool } from "../../utils/database";

export const createRolesTableService = async () => {
  const query = await pool.promise().query(`
        CREATE TABLE IF NOT EXISTS roles (
            role_id INT PRIMARY KEY AUTO_INCREMENT,
            role_name VARCHAR(50) NOT NULL UNIQUE,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        );
    `);
  return query;
};

export const addRoleService = async (role: string) => {
  const [query] = await pool.promise().query(
    `
        INSERT INTO roles (role_name) VALUES (?);
    `,
    [role]
  );
  return query;
};

export const findOneRoleService = async (role: string) => {
  const [query]: [RowDataPacket[], any] = await pool.promise().query(
    `
        SELECT role_id FROM roles WHERE role_name = ?
    `,
    [role]
  );
  return query;
};
