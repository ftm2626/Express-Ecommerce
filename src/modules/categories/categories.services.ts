import { pool } from "../../utils/database";

export const createCategoriesTableService = () => {
  const query = pool.promise().query(`
    CREATE TABLE categories(
        category_id INT PRIMARY KEY AUTO_INCREMENT,
        category_name VARCHAR(255) NOT NULL,
        parent_category_id INT, 
        FOREIGN KEY (parent_category_id) REFERENCES categories(category_id)
    );
    `);
  return query;
};

export const createCategoriesClosureTableService = () => {
  const query = pool.promise().query(`
    CREATE TABLE category_closure(
        ancestor_category_id INT,
        descendent_category_id INT,
        depth INT,
        PRIMARY KEY (ancestor_category_id,descendent_category_id),
        FOREIGN KEY (ancestor_category_id) REFRENCES categories(category_id),
        FOREIGN KEY (descendent_category_id) REFRENCES categories(category_id),
    );
    `);
  return query;
};

export const createVariantCategoriesTableService = () => {
  const query = pool.promise().query(`
    CREATE TABLE variant_categories(
        variant_id INT,
        category_id INT,
        PRIMARY KEY (variant_id,category_id),
        FOREIGN KEY (variant_id) REFERENCES product_variants(variant_id),
        FOREIGN KEY (category_id) REFERENCES categories(category_id)
    )
    `);
  return query;
};
