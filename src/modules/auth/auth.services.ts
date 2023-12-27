import { pool } from "../../utils/database";
import { loginT } from "./auth.model";

export const loginService = async (email:string) => {
  const [query] = await pool.promise().query(
    `
      SELECT * FROM users WHERE  email = ?;
    `,
    [email]
  );
  return query;
};
