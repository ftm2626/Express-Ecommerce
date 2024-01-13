import { pool } from "../../utils/database";

export const createShipmentsTableService = () => {
  const query = pool.promise().query(`
      CREATE TABLE shipments (
          shipment_id INT PRIMARY KEY AUTO_INCREMENT,
          order_id INT,
          shipment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          tracking_number VARCHAR(255),
          estimated_delivery_date DATE,
          delivery_status ENUM('Processing', 'Shipped', 'Delivered', 'Cancelled') DEFAULT 'Processing',
          FOREIGN KEY (order_id) REFERENCES orders(order_id)
      );
    `);
  return query;
};
