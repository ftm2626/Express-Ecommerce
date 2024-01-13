import { pool } from "../../utils/database";

export const createPromotionsTableService = () => {
  const query = pool.promise().query(`
      CREATE TABLE promotions (
          promotion_id INT PRIMARY KEY AUTO_INCREMENT,
          promotion_name VARCHAR(255) NOT NULL,
          start_date DATE,
          end_date DATE,
          discount_percentage DECIMAL(5, 2) NOT NULL
      );
    `);
  return query;
};
