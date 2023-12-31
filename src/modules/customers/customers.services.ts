import { RowDataPacket } from "mysql2/promise";
import { pool } from "../../utils/database";
import { createCustomerT, updataCustomerT } from "./customers.model";

export const createCustomersTableService = async () => {
  const query = pool.promise().query(`
        CREATE TABLE IF NOT EXISTS customers (
            customer_id INT PRIMARY KEY AUTO_INCREMENT,
            first_name VARCHAR(50),
            last_name VARCHAR(50) NOT NULL,
            email VARCHAR(30) UNIQUE, 
            password VARCHAR(100) NOT NULL,
            role VARCHAR(20) DEFAULT "customer"
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        );
    `);
  return query;
};

export const createCustomerService = async (info: createCustomerT) => {
  const query = pool.execute(
    `
      INSERT INTO customers (first_name, last_name, email, password)
      VALUES (?,?,?,?);
    `,
    [info.first_name, info.last_name, info.email, info.password]
  );
  return query;
};

export const getAllCustomersService = async () => {
  const [query] = await pool.promise().query(
    `
      SELECT * FROM customers;
    `
  );
  return query;
};

export const getOneCustomerService = async (data: number | string) => {
  const [query]: [RowDataPacket[], any] = await pool.promise().query(
    `
      SELECT * FROM customers WHERE customer_id = ? OR email = ?;
    `,
    [data, data]
  );
  return query;
};

export const deleteOneCustomerService = async (customerId: number) => {
  const [query] = await pool.promise().query(
    `
      DELETE FROM customers WHERE customer_id = ?;
    `,
    [customerId]
  );
  return query;
};

export const updateCustomerService = async (
  info: updataCustomerT,
  customerId: number
) => {
  const query = pool.execute(
    `
      UPDATE customers 
      SET first_name = ?, 
          last_name = ?, 
          email = ?
      WHERE customer_id = ?;
    `,
    [info.first_name, info.last_name, info.email, customerId]
  );
  return query;
};
