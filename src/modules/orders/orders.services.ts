import { pool } from "../../utils/database";

export const createOrderDetailsTableService = () => {
  const query = pool.promise().query(`
  CREATE TABLE order_details(
    order_detail_id INT KEY AUTO_INCREMENT,
    order_id INT,
    product_id INT,
    quantity INT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    subtotal DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
  );
  `);
  return query;
};

export const createOrderHistoryTableService = () => {
  const query = pool.promise().query(`
    CREATE TABLE order_history (
        order_history_id INT PRIMARY KEY AUTO_INCREMENT,
        order_id INT,
        order_status ENUM('Pending', 'Shipped', 'Delivered', 'Cancelled') NOT NULL,
        status_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (order_id) REFERENCES orders(order_id)
    )
    `);
  return query;
};
