import { RowDataPacket } from "mysql2/promise";
import { pool } from "../../utils/database";
import { createCustomerT, updataCustomerT } from "./customers.model";


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
