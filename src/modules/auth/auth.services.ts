import { pool } from "../../utils/database";

export const findUserService = async (email: string) => {
  const [query] = await pool.promise().query(
    `
      SELECT * FROM users WHERE  email = ?;
    `,
    [email]
  );
  return query;
};
