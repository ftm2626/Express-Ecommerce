import { pool } from "../../utils/database";

export const createBrandsTableService = () => {
  const query = pool.promise().query(`
    CREATE TABLE brands (
    brand_id INT PRIMARY KEY AUTO_INCREMENT,
    brand_name VARCHAR(255) NOT NULL
    );
    `);
  return query;
};
