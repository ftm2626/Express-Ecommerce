import { RowDataPacket } from "mysql2/promise";
import { pool } from "../../utils/database";

export const showAllProductsQuery = async () => {
  const [query] = await pool.promise().query(`
        SELECT * FROM products;
    `);
  return query;
};

export const showOneProductQuery = async (id: number) => {
  const [query]: [RowDataPacket[], any] = await pool.promise().query(
    `
        SELECT * FROM products WHERE product_id = ?;
    `,
    [id]
  );
  return query;
};
