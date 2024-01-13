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

export const createProductBrandsTableServices = () => {
  const query = pool.promise().query(`
      CREATE TABLE product_brands (
          product_id INT,
          brand_id INT,
          PRIMARY KEY (product_id, brand_id),
          FOREIGN KEY (product_id) REFERENCES products(product_id),
          FOREIGN KEY (brand_id) REFERENCES brands(brand_id)
      );
    `);
  return query;
};

export const createProductAttributesTableServices = () => {
  const query = pool.promise().query(`
      CREATE TABLE product_attributes (
        product_id INT,
        attribute_id INT,
        attribute_value VARCHAR(255) NOT NULL,
        PRIMARY KEY (product_id, attribute_id),
        FOREIGN KEY (product_id) REFERENCES products(product_id),
        FOREIGN KEY (attribute_id) REFERENCES attributes(attribute_id)
    );
    `);
  return query;
};


export const createProductImagesTableServices = () => {
  const query = pool.promise().query(`
      CREATE TABLE product_images (
          image_id INT PRIMARY KEY AUTO_INCREMENT,
          product_id INT,
          image_url VARCHAR(255) NOT NULL,
          is_primary BOOLEAN DEFAULT false,
          FOREIGN KEY (product_id) REFERENCES products(product_id)
      );
    `);
  return query;
};


export const createProductReviewsTableServices = () => {
  const query = pool.promise().query(`
      CREATE TABLE product_reviews (
          review_id INT PRIMARY KEY AUTO_INCREMENT,
          product_id INT,
          user_id INT,
          review_text TEXT NOT NULL,
          review_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          FOREIGN KEY (product_id) REFERENCES products(product_id),
          FOREIGN KEY (user_id) REFERENCES users(user_id)
      );
    `);
  return query;
};


export const createProductRatingTableServices = () => {
  const query = pool.promise().query(`
      CREATE TABLE product_ratings (
          rating_id INT PRIMARY KEY AUTO_INCREMENT,
          product_id INT,
          user_id INT,
          rating DECIMAL(2, 1) NOT NULL,
          rating_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          FOREIGN KEY (product_id) REFERENCES products(product_id),
          FOREIGN KEY (user_id) REFERENCES users(user_id)
      );
    `);
  return query;
};

export const createProductPromotionsTableServices = () => {
  const query = pool.promise().query(`
      CREATE TABLE product_promotions (
          product_id INT,
          promotion_id INT,
          PRIMARY KEY (product_id, promotion_id),
          FOREIGN KEY (product_id) REFERENCES products(product_id),
          FOREIGN KEY (promotion_id) REFERENCES promotions(promotion_id)
      );
    `);
  return query;
};


export const createProductTagsTableServices = () => {
  const query = pool.promise().query(`
      CREATE TABLE product_tags (
          tag_id INT PRIMARY KEY AUTO_INCREMENT,
          tag_name VARCHAR(255) NOT NULL
      );
    `);
  return query;
};

export const createProductTagsMappingTableServices = () => {
  const query = pool.promise().query(`
      CREATE TABLE product_tags_mapping (
          product_id INT,
          tag_id INT,
          PRIMARY KEY (product_id, tag_id),
          FOREIGN KEY (product_id) REFERENCES products(product_id),
          FOREIGN KEY (tag_id) REFERENCES product_tags(tag_id)
      );
    `);
  return query;
};