import { pool } from "../../utils/database";

export const createNotificationsTableService = () => {
  const query = pool.promise().query(`
        CREATE TABLE notifications (
            notification_id INT PRIMARY KEY AUTO_INCREMENT,
            user_id INT,
            message TEXT NOT NULL,
            is_read BOOLEAN DEFAULT false,
            notification_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(user_id)
        );
    `);
  return query;
};
