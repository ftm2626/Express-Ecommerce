import { RowDataPacket } from "mysql2/promise";
import { pool } from "../../utils/database";


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
        SELECT role_id FROM roles WHERE role_name = ?;
    `,
    [role]
  );
  return query;
};
