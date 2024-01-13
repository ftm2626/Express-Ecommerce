import { pool } from "../../utils/database";

export const createAddressesTableService = () => {
  const query = pool.promise().query(`
      CREATE TABLE addresses (
          address_id INT PRIMARY KEY AUTO_INCREMENT,
          user_id INT,
          address_line1 VARCHAR(255) NOT NULL,
          address_line2 VARCHAR(255),
          city VARCHAR(255) NOT NULL,
          state VARCHAR(255) NOT NULL,
          postal_code VARCHAR(20) NOT NULL,
          country VARCHAR(255) NOT NULL,
          is_default BOOLEAN DEFAULT false,
          FOREIGN KEY (user_id) REFERENCES users(user_id)
      );
    `);
  return query;
};
