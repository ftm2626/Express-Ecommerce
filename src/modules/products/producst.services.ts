import { pool } from "../../utils/database";

export const showAllProductsQuery = async () => {
  const [query] = await pool.promise().query(`
        SELECT * FROM products;
    `);
  return query;
};
