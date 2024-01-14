import { RowDataPacket } from "mysql2/promise";
import { pool } from "../../utils/database";
import { registerUserT } from "./user.model";



export const findOneUserService = async (data: string) => {
  const [query]: [RowDataPacket[], any] = await pool.promise().query(
    `
        SELECT * FROM users WHERE user_id = ? OR username = ?;
    `,
    [data, data]
  );
  return query;
};

export const addUserService = async ({
  userId,
  username,
  password,
}: registerUserT) => {
  const [query]: [RowDataPacket[], any] = await pool.promise().query(
    `
        INSERT INTO users (role_id,username,password)
        VALUES (?,?,?)
        ;
    `,
    [userId, username, password]
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
