import { pool } from "../../utils/database";

export const createDiscountsTableService = () => {
  const query = pool.promise().query(`
      CREATE TABLE discounts (
          discount_id INT PRIMARY KEY AUTO_INCREMENT,
          product_id INT,
          discount_percentage DECIMAL(5, 2) NOT NULL,
          start_date DATE,
          end_date DATE,
          FOREIGN KEY (product_id) REFERENCES products(product_id)
      );
    `);
  return query;
};
