import { pool } from "../../utils/database";

export const createAttributesTableService = () => {
  const query = pool.promise().query(`
    CREATE TABLE attributes (
    attribute_id INT PRIMARY KEY AUTO_INCREMENT,
    attribute_name VARCHAR(255) NOT NULL
);
    `);
  return query;
};
