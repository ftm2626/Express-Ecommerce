import { pool } from "../../utils/database"

export const createProductsTableService = ()=>{
    const query = pool.promise().query(`
        CREATE TABLE products (
            product_id INT PRIMARY KEY AUTO_INCREMENT,
            product_name VARCHART(255) NOT NULL,
            description TEXT,
            price DECIMAL (10,2) NOT NULL,
            stock_quantity INT NOT NULL,
            is_published DEFAULT ture,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        );
    `);
    return query
}