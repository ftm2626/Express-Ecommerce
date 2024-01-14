-- Insert Categories
INSERT INTO categories (category_name, parent_category_id) VALUES
('Electronics', NULL),
('Clothing', NULL),
('Home and Furniture', NULL),
('Books', NULL),
('Toys and Games', NULL),
('Sports and Outdoors', NULL),
('Beauty and Personal Care', NULL),
('Health and Wellness', NULL),
('Jewelry and Accessories', NULL),
('Pet Supplies', NULL);


-- Insert Subcategories
INSERT INTO categories (category_name, parent_category_id) VALUES
  ('Laptops', 1),
  ('Smartphones', 1),
  ('Audio Devices', 1),
  ('Cameras', 1),
  ('Wearable Tech', 1),
  ('T-shirts', 2),
  ('Jeans', 2),
  ('Sweaters', 2),
  ('Dress Shirts', 2),
  ('Sneakers', 2),
  ('Skirts', 2),
  ('Jackets', 2),
  ('Hoodies', 2),
  ('Shorts', 2),
  ('Boots', 2),
  ('Living Room', 3),
  ('Bedroom', 3),
  ('Kitchen', 3),
  ('Fiction', 4),
  ('Non-Fiction', 4),
  ('Mystery', 4),
  ('Science Fiction', 4),
  ('Fantasy', 4),
  ('Board Games', 5),
  ('Outdoor Games', 5),
  ('Puzzles', 5),
  ('Outdoor Recreation', 6),
  ('Team Sports', 6),
  ('Fitness Equipment', 6),
  ('Skincare', 7),
  ('Haircare', 7),
  ('Makeup', 7),
  ('Vitamins and Supplements', 8),
  ('Fitness Trackers', 8),
  ('Earrings', 9),
  ('Necklaces', 9),
  ('Bracelets', 9),
  ('Dog Food', 10),
  ('Cat Food', 10),
  ('Pet Toys', 10);

-- Insert Dummy Data into Product Attributes Table
INSERT INTO product_attributes (attribute_name) VALUES
  ('Color'),
  ('Size'),
  ('Weight'),
  ('RAM Size'),
  ('Storage Capacity'),
  ('Screen Size'),
  ('Material'),
  ('Processor Type'),
  ('Operating System'),
  ('Resolution');


  -- Insert Dummy Data into Brands Table
INSERT INTO brands (brand_name) VALUES
  ('Samsung'),
  ('Apple'),
  ('Sony'),
  ('Nike'),
  ('Adidas'),
  ('Puma'),
  ('AmazonBasics'),
  ('HP'),
  ('Dell'),
  ('Canon');

  -- Insert Dummy Data into Suppliers Table
INSERT INTO suppliers (supplier_name, contact_person, contact_email, contact_phone) VALUES
  ('Supplier A', 'John Supplier', 'john.supplier@example.com', '555-1234'),
  ('Supplier B', 'Jane Supplier', 'jane.supplier@example.com', '555-5678'),
  ('Supplier C', 'Bob Supplier', 'bob.supplier@example.com', '555-9876'),
  ('Supplier D', 'Alice Supplier', 'alice.supplier@example.com', '555-4321');


-- Insert Dummy Data into Products Table
INSERT INTO products (product_name, category_id, brand_id) VALUES
  ('Smartphone X', 1, 1),
  ('Smartwatch A', 1, 2),
  ('Headphones Pro', 1, 3),
  ('Digital Camera', 1, 4),
  ('Tablet Y', 1, 1),
  ('Wireless Earbuds', 1, 3),
  ('Laptop C', 1, 2),
  ('Gaming Console', 1, 4),
  ('Fitness Tracker', 1, 2),
  ('Portable Speaker', 1, 3),
  ('T-shirt 1', 7, 5),
  ('Jeans 1', 7, 6),
  ('Sweater 1', 7, 7),
  ('Dress Shirt 1', 7, 8),
  ('Sneakers 1', 7, 9),
  ('Skirt 1', 7, 10),
  ('Jacket 1', 7, 10),
  ('Hoodie 1', 7, 10),
  ('Shorts 1', 7, 10),
  ('Boots 1', 7, 10);


-- Insert Dummy Data into Product Images Table
  INSERT INTO product_images (product_id, image_url) VALUES
  (1, 'https://example.com/image1.jpg'),
  (1, 'https://example.com/image2.jpg'),
  (2, 'https://example.com/image3.jpg'),
  (3, 'https://example.com/image4.jpg'),
  (3, 'https://example.com/image5.jpg'),
  (4, 'https://example.com/image6.jpg'),
  (5, 'https://example.com/image7.jpg'),
  (6, 'https://example.com/image8.jpg'),
  (6, 'https://example.com/image9.jpg'),
  (6, 'https://example.com/image10.jpg');


select * from products;