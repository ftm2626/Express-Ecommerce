import { pool } from "../../utils/database";

export const createProductsTableService = () => {
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
  return query;
};

export const createProductCategoriesTableService = () => {
  const query = pool.promise().query(`
    CREATE TABLE product_categories(
        product_id INT,
        category_id INT,
        PRIMARY KEY (product_id,category_id),
        FOREIGN KEY (product_id) REFERENCES products(product_id),
        FOREIGN KEY (category_id) REFERENCES categories(category_id)
    );
  `);
  return query;
};

export const createProductVariantsTableServices = () => {
  const query = pool.promise().query(`
    CREATE TABLE product_variants (
        variant_id INT PRIMARY KEY AUTO_INCREMENT,
        product_id INT,
        variant_name VARCHAR(255) NOT NULL,
        variant_price DECIMAL(10,2) NOT NULL,
        FOREIGN KEY (product_id) REFERENCES products(product_id)
    );
    `);
  return query;
};
