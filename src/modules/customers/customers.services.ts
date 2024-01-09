import { RowDataPacket } from "mysql2/promise";
import { pool } from "../../utils/database";
import { createCustomerT, updataCustomerT } from "./customers.model";

export const createCustomersTableService = async () => {
  const query = pool.promise().query(`
      CREATE TABLE IF NOT EXISTS customers (
          customer_id INT PRIMARY KEY AUTO_INCREMENT,
          user_id INT,
          first_name VARCHAR(255) NOT NULL ,
          last_name VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL,
          address TEXT,
          phone_number VARCHAR(20),
          FOREIGN KEY (user_id) REFERENCES users(user_id)
      );
    `);
  return query;
};

export const createCustomerDetailsTableService = () => {
  const query = pool.promise().query(`
    CREATE TABLE customer_details(
      user_id INT PRIMARY KEY,
      date_of_birth DATE,
      gender ENUM(),
      profile_picture_url VARCHAR(255),
      FOREIGN KEY (user_id) REFERENCES users(user_id)
    );
  `);
  return query;
};

export const createCustomerPreferencesTableService = () => {
  const query = pool.promise().query(`
    CREATE TABLE customer_preferences(
      user_id INT PRIMARY KEY,
      receive_promotional_emails BOOLEAN DEFAULT true,
      reveive_newsletter BOOLEAN DEFAULT true,
      FOREIGN KEY (user_id) REFERENCES users(user_id)
    );
  `);
  return query;
};


export const createCustomerService = async (info: createCustomerT) => {
  const query = pool.execute(
    `
      INSERT INTO customers (user_id ,first_name, last_name, email)
      VALUES (?,?,?,?);
    `,
    [info.userId, info.first_name, info.last_name, info.email]
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

export const createCustomerDetailsTable = async () => {};
