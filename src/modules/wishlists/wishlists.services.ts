import { pool } from "../../utils/database";

export const createWishlistsTableService = () => {
  const query = pool.promise().query(`
    CREATE TABLE wishlists (
        wishlist_id INT PRIMARY KEY AUTO_INCREMENT,
        user_id INT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(user_id)
    );
    `);
  return query;
};

export const createWishlistItemsTableService = () => {
  const query = pool.promise().query(`
      CREATE TABLE wishlist_items (
          wishlist_item_id INT PRIMARY KEY AUTO_INCREMENT,
          wishlist_id INT,
          product_id INT,
          FOREIGN KEY (wishlist_id) REFERENCES wishlists(wishlist_id),
          FOREIGN KEY (product_id) REFERENCES products(product_id)
      );
    `);
  return query;
};

