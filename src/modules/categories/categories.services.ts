import { pool } from "../../utils/database"

export const createCategoriesTableService = ()=>{
    const query = pool.promise().query(`
        CREATE TABLE categories(
            category_id INT PRIMARY KEY AUTO_INCREMENT,
            category_name VARCHAR(255) NOT NULL,
            parent_category_id INT, 
            FOREIGN KEY (parent_category_id) REFERENCES categories(category_id)
        );
    `)
    return query
}