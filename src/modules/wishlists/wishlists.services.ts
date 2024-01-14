import { pool } from "../../utils/database";

export const findWhishList = async (userId: number) => {
  const query = await pool.promise().query(
    `
  SELECT wishlist_id FROM wishlists WHERE user_id = ?
  `,
    [userId]
  );
  return query;
};
