import { pool } from "../../utils/database";

export const createShoppingCartsTableService = () => {
  const query = pool.promise().query(`
      CREATE TABLE shopping_carts (
          cart_id INT PRIMARY KEY AUTO_INCREMENT,
          user_id INT,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          FOREIGN KEY (user_id) REFERENCES users(user_id)
      );
    `);
  return query;
};


export const createCartItemsTableService = () => {
  const query = pool.promise().query(`
      CREATE TABLE cart_items (
          cart_item_id INT PRIMARY KEY AUTO_INCREMENT,
          cart_id INT,
          product_id INT,
          quantity INT NOT NULL,
          FOREIGN KEY (cart_id) REFERENCES shopping_carts(cart_id),
          FOREIGN KEY (product_id) REFERENCES products(product_id)
      );
    `);
  return query;
};
