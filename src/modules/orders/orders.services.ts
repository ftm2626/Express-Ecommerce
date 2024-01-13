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
    );
    `);
  return query;
};

export const createOrderTrackingTableService = () => {
  const query = pool.promise().query(`
      CREATE TABLE order_tracking (
          tracking_id INT PRIMARY KEY AUTO_INCREMENT,
          order_id INT,
          status VARCHAR(255) NOT NULL,
          location VARCHAR(255),
          update_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          FOREIGN KEY (order_id) REFERENCES orders(order_id)
      );
    `);
  return query;
};


export const createOrderReturnsTableService = () => {
  const query = pool.promise().query(`
      CREATE TABLE order_returns (
          return_id INT PRIMARY KEY AUTO_INCREMENT,
          order_id INT,
          return_reason TEXT NOT NULL,
          return_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          return_status ENUM('Requested', 'Approved', 'Processing', 'Completed', 'Cancelled') DEFAULT 'Requested',
          FOREIGN KEY (order_id) REFERENCES orders(order_id)
      );
    `);
  return query;
};


