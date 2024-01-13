import { pool } from "../../utils/database";

export const createSiteReviewsTableService = () => {
  const query = pool.promise().query(`
      CREATE TABLE site_reviews (
          review_id INT PRIMARY KEY AUTO_INCREMENT,
          user_id INT,
          review_text TEXT NOT NULL,
          review_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          FOREIGN KEY (user_id) REFERENCES users(user_id)
      );
    `);
  return query;
};
