import { RowDataPacket } from "mysql2/promise";
import { pool } from "../../utils/database";
import { createAdminT, updataAdminT } from "./admins.model";

export const createAdminsTableService = async () => {
  const query = pool.promise().query(`
        CREATE TABLE IF NOT EXISTS admins (
            admin_id INT PRIMARY KEY AUTO_INCREMENT,
            user_id INT,
            first_name VARCHAR(255) NOT NULL ,
            last_name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            FOREIGN KEY (user_id) REFERENCES users(user_id)
        );
    `);
  return query;
};

export const createAdminService = async (info: createAdminT) => {
  const query = pool.execute(
    `
      INSERT INTO admins (user_id ,first_name, last_name, email)
      VALUES (?,?,?,?);
    `,
    [info.userId, info.first_name, info.last_name, info.email]
  );
  return query;
};

export const getAllAdminsService = async () => {
  const [query] = await pool.promise().query(
    `
      SELECT * FROM admins;
    `
  );
  return query;
};

export const getOneAdminService = async (data: number | string) => {
  const [query]: [RowDataPacket[], any] = await pool.promise().query(
    `
      SELECT * FROM admins WHERE admin_id = ? OR email = ?;
    `,
    [data, data]
  );
  return query;
};

export const deleteOneAdminService = async (adminId: number) => {
  const [query] = await pool.promise().query(
    `
      DELETE FROM admins WHERE admin_id = ?;
    `,
    [adminId]
  );
  return query;
};

export const updateAdminService = async (
  info: updataAdminT,
  adminId: number
) => {
  const query = pool.execute(
    `
      UPDATE admins 
      SET first_name = ?, 
          last_name = ?, 
          email = ?
      WHERE admin_id = ?;
    `,
    [info.first_name, info.last_name, info.email, adminId]
  );
  return query;
};
