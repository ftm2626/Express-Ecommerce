import { pool } from "../../utils/database";

export const createWishlistsTableService = async () => {
  const query = await pool.promise().query(`
      CREATE TABLE wishlists (
          wishlist_id INT PRIMARY KEY AUTO_INCREMENT,
          user_id INT,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          FOREIGN KEY (user_id) REFERENCES users(user_id)
      );
    `);
  return query;
};

export const createWishlistItemsTableService = async () => {
  const query = await pool.promise().query(`
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

export const findWhishList = async (userId: number) => {
  const query = await pool.promise().query(
    `
  SELECT wishlist_id FROM wishlists WHERE user_id = ?
  `,
    [userId]
  );
  return query;
};
