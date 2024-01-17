import { RowDataPacket } from "mysql2/promise";
import { pool } from "../../utils/database";

export const showAllCategoriesQuery = async () => {
  const query: [RowDataPacket[], any] = await pool.promise().query(`
        SELECT categories.category_id, categories.category_name,
           subcategories.category_id AS subcategory_id,
           subcategories.category_name AS subcategory_name FROM categories 
        LEFT JOIN categories AS subcategories ON subcategories.parent_category_id = categories.category_id
        WHERE categories.parent_category_id IS NULL;
    `);
  return query;
};

export const showOneCategoryQuery = async (id: number) => {
  const [query]: [RowDataPacket[], any] = await pool.promise().query(
    `
        SELECT * FROM categories WHERE category_id = ?;
    `,
    [id]
  );
  return query;
};
