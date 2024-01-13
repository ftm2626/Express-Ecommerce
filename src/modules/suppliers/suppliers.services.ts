import { pool } from "../../utils/database";

export const createSuppliersTableService = () => {
  const query = pool.promise().query(`
      CREATE TABLE suppliers (
          supplier_id INT PRIMARY KEY AUTO_INCREMENT,
          supplier_name VARCHAR(255) NOT NULL,
          contact_person VARCHAR(255),
          contact_email VARCHAR(255),
          contact_phone VARCHAR(20)
      );
    `);
  return query;
};
