import { RowDataPacket } from "mysql2/promise";
import { pool } from "../../utils/database";


export const findUserService = async (data: string) => {
  const [query]: [RowDataPacket[],any] = await pool
    .promise()
    .query(
      `
      SELECT * FROM users WHERE  email = ? OR user_id = ? ;
    `,
      [data, data]
    );
  return query;
};
