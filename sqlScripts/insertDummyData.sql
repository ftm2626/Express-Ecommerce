-- Dummy data for user_roles
INSERT INTO user_roles (role_id, role_name) VALUES
(1, 'Admin'),
(2, 'Customer'),
(3, 'Supplier');

-- Dummy data for roles
INSERT INTO roles (role_id, role_name) VALUES
(1, 'Admin'),
(2, 'Customer'),
(3, 'Supplier');

-- Dummy data for users
INSERT INTO users (user_id, username, password_hash, email, role_id) VALUES
(1, 'admin_user', 'admin_password', 'admin@example.com', 1),
(2, 'customer_user', 'customer_password', 'customer@example.com', 2),
(3, 'supplier_user', 'supplier_password', 'supplier@example.com', 3);

-- Dummy data for admins
INSERT INTO admins (admin_id, user_id) VALUES
(1, 1);

-- Dummy data for customers
INSERT INTO customers (customer_id, user_id) VALUES
(2, 2);

-- Dummy data for customer_details
INSERT INTO customer_details (customer_id, first_name, last_name, phone_number) VALUES
(2, 'John', 'Doe', '123-456-7890');

-- Dummy data for addresses
INSERT INTO addresses (address_id, customer_id, address_line1, city, state, postal_code, country) VALUES
(1, 2, '123 Main St', 'Cityville', 'Stateville', '12345', 'Countryland');

-- Dummy data for shopping_carts
INSERT INTO shopping_carts (cart_id, customer_id, created_at) VALUES
(1, 2, CURRENT_TIMESTAMP);

-- Dummy data for cart_items
INSERT INTO cart_items (cart_item_id, cart_id, product_id, quantity) VALUES
(1, 1, 1, 2),
(2, 1, 2, 1);

-- Dummy data for customer_payments
INSERT INTO customer_payments (payment_id, customer_id, amount, payment_date) VALUES
(1, 2, 150, CURRENT_TIMESTAMP);

-- Dummy data for customer_activities
INSERT INTO customer_activities (activity_id, customer_id, activity_type, activity_date) VALUES
(1, 2, 'Login', CURRENT_TIMESTAMP),
(2, 2, 'Purchase', CURRENT_TIMESTAMP);

-- Dummy data for wishlists
INSERT INTO wishlists (wishlist_id, customer_id, created_at) VALUES
(1, 2, CURRENT_TIMESTAMP);

-- Dummy data for wishlist_items
INSERT INTO wishlist_items (wishlist_item_id, wishlist_id, product_id) VALUES
(1, 1, 3),
(2, 1, 4);

-- Dummy data for notifications
INSERT INTO notifications (notification_id, user_id, message, is_read, created_at) VALUES
(1, 2, 'New product available!', FALSE, CURRENT_TIMESTAMP),
(2, 2, 'Your order has been shipped.', FALSE, CURRENT_TIMESTAMP);

-- Dummy data for site_reviews
INSERT INTO site_reviews (review_id, user_id, rating, review_text, created_at) VALUES
(1, 2, 5, 'Great website!', CURRENT_TIMESTAMP),
(2, 2, 4, 'Easy to navigate.', CURRENT_TIMESTAMP);

-- Dummy data for customer_messages
INSERT INTO customer_messages (message_id, sender_id, receiver_id, message_text, created_at) VALUES
(1, 2, 1, 'Hi Admin, I have a question.', CURRENT_TIMESTAMP),
(2, 1, 2, 'Hello Customer, how can I help you?', CURRENT_TIMESTAMP);

-- Dummy data for categories
INSERT INTO categories (category_id, category_name, parent_category_id) VALUES
(1, 'Electronics', NULL),
(2, 'Laptops', 1);

-- Dummy data for products
INSERT INTO products (product_id, product_name, category_id, brand_id) VALUES
(1, 'Laptop A', 2, 1),
(2, 'Laptop B', 2, 1),
(3, 'Smartphone X', 1, 2),
(4, 'Tablet Y', 1, 2);

-- Dummy data for product_brands
INSERT INTO product_brands (brand_id, brand_name) VALUES
(1, 'Brand X'),
(2, 'Brand Y');

-- Dummy data for product_attributes
INSERT INTO product_attributes (attribute_id, attribute_name) VALUES
(1, 'Color'),
(2, 'Weight');

-- Dummy data for product_images
INSERT INTO product_images (image_id, product_id, image_url) VALUES
(1, 1, 'image_url_1'),
(2, 1, 'image_url_2'),
(3, 3, 'image_url_3'),
(4, 4, 'image_url_4');

-- Dummy data for product_reviews
INSERT INTO product_reviews (review_id, product_id, user_id, rating, review_text, created_at) VALUES
(1, 1, 2, 4, 'Great laptop!', CURRENT_TIMESTAMP),
(2, 3, 2, 5, 'Awesome smartphone!', CURRENT_TIMESTAMP);

-- Dummy data for product_ratings
INSERT INTO product_ratings (rating_id, product_id, user_id, rating, created_at) VALUES
(1, 1, 2, 4, CURRENT_TIMESTAMP),
(2, 3, 2, 5, CURRENT_TIMESTAMP);

-- Dummy data for discounts
INSERT INTO discounts (discount_id, discount_code, discount_percentage, start_date, end_date) VALUES
(1, 'DISCOUNT10', 10, '2024-01-01', '2024-12-31'),
(2, 'DISCOUNT20', 20, '2024-01-01', '2024-12-31');

-- Dummy data for promotions
INSERT INTO promotions (promotion_id, promotion_name, start_date, end_date) VALUES
(1, 'Summer Sale', '2024-06-01', '2024-06-30'),
(2, 'Holiday Special', '2024-12-01', '2024-12-31');

-- Dummy data for product_promotions
INSERT INTO product_promotions (product_id, promotion_id) VALUES
(1, 1),
(2, 2),
(3, 1),
(4, 2);

-- Dummy data for orders
INSERT INTO orders (order_id, customer_id, order_date, total_amount) VALUES
(1, 2, CURRENT_TIMESTAMP, 1500),
(2, 2, CURRENT_TIMESTAMP, 2000);

-- Dummy data for order_items
INSERT INTO order_items (order_item_id, order_id, product_id, quantity, subtotal) VALUES
(1, 1, 1, 2, 800),
(2, 1, 2, 1, 700),
(3, 2, 3, 1, 1000),
(4, 2, 4, 3, 1000);

-- Dummy data for order_tracking
INSERT INTO order_tracking (tracking_id, order_id, status, update_date) VALUES
(1, 1, 'Processing', CURRENT_TIMESTAMP),
(2, 2, 'Shipped', CURRENT_TIMESTAMP);

-- Dummy data for order_payments
INSERT INTO order_payments (payment_id, order_id, amount, payment_date) VALUES
(1, 1, 1500, CURRENT_TIMESTAMP),
(2, 2, 2000, CURRENT_TIMESTAMP);

-- Dummy data for order_returns
INSERT INTO order_returns (return_id, order_id, customer_id, return_reason_id, status, created_at) VALUES
(1, 1, 2, 1, 'Processing', CURRENT_TIMESTAMP),
(2, 2, 2, 2, 'Approved', CURRENT_TIMESTAMP);

-- Dummy data for return_items
INSERT INTO return_items (return_item_id, return_id, order_item_id, quantity) VALUES
(1, 1, 1, 1),
(2, 2, 3, 2);

-- Dummy data for return_reasons
INSERT INTO return_reasons (return_reason_id, reason_name) VALUES
(1, 'Defective'),
(2, 'Changed Mind');

-- Dummy data for return_actions
INSERT INTO return_actions (action_id, action_name) VALUES
(1, 'Refund'),
(2, 'Exchange');

-- Dummy data for product_tags
INSERT INTO product_tags (tag_id, tag_name) VALUES
(1, 'New Arrival'),
(2, 'Bestseller'),
(3, 'Sale');

-- Dummy data for product_tags_mapping
INSERT INTO product_tags_mapping (product_id, tag_id) VALUES
(1, 1),
(1, 2),
(2, 2),
(2, 3),
(3, 1),
(3, 3),
(4, 2),
(4, 3);

-- Dummy data for variant_categories
INSERT INTO variant_categories (category_id, category_name) VALUES
(1, 'Size'),
(2, 'RAM Size');

-- Dummy data for product_variants
INSERT INTO product_variants (variant_id, product_id, category_id, variant_name) VALUES
(1, 1, 1, 'Large'),
(2, 1, 2, '8GB'),
(3, 2, 1, 'Medium'),
(4, 2, 2, '16GB'),
(5, 3, 1, '128GB'),
(6, 3, 2, '16GB'),
(7, 4, 1, '64GB'),
(8, 4, 2, '8GB');

-- Dummy data for product_variant_values
INSERT INTO product_variant_values (value_id, variant_id, value_name) VALUES
(1, 1, 'Large'),
(2, 2, '8GB'),
(3, 3, 'Medium'),
(4, 4, '16GB'),
(5, 5, '128GB'),
(6, 6, '16GB'),
(7, 7, '64GB'),
(8, 8, '8GB');

-- Dummy data for suppliers
INSERT INTO suppliers (supplier_id, supplier_name, contact_person, contact_email, contact_phone) VALUES
(1, 'Supplier A', 'John Supplier', 'john.supplier@example.com', '555-1234'),
(2, 'Supplier B', 'Jane Supplier', 'jane.supplier@example.com', '555-5678');

-- Dummy data for attributes
INSERT INTO attributes (attribute_id, attribute_name) VALUES
(1, 'Color'),
(2, 'Weight');

-- Dummy data for product_attributes
INSERT INTO product_attributes (attribute_id, attribute_name) VALUES
(1, 'Color'),
(2, 'Weight');

-- Dummy data for product_tags
INSERT INTO product_tags (tag_id, tag_name) VALUES
(1, 'New Arrival'),
(2, 'Bestseller'),
(3, 'Sale');

-- Dummy data for product_tags_mapping
INSERT INTO product_tags_mapping (product_id, tag_id) VALUES
(1, 1),
(1, 2),
(2, 2),
(2, 3);

-- Dummy data for variant_categories
INSERT INTO variant_categories (category_id, category_name) VALUES
(1, 'Size'),
(2, 'RAM Size');

-- Dummy data for product_variants
INSERT INTO product_variants (variant_id, product_id, category_id, variant_name) VALUES
(1, 1, 1, 'Large'),
(2, 1, 2, '8GB'),
(3, 2, 1, 'Medium'),
(4, 2, 2, '16GB');

-- Dummy data for product_variant_values
INSERT INTO product_variant_values (value_id, variant_id, value_name) VALUES
(1, 1, 'Large'),
(2, 2, '8GB'),
(3, 3, 'Medium'),
(4, 4, '16GB');

-- Dummy data for order_payments (continued)
INSERT INTO order_payments (payment_id, order_id, amount, payment_date) VALUES
(3, 1, 500, CURRENT_TIMESTAMP),
(4, 2, 800, CURRENT_TIMESTAMP);

-- Dummy data for order_shipments
INSERT INTO order_shipments (shipment_id, order_id, shipping_date, estimated_delivery_date, status) VALUES
(1, 1, CURRENT_TIMESTAMP, '2024-01-20', 'Shipped'),
(2, 2, CURRENT_TIMESTAMP, '2024-01-25', 'Processing');

-- Dummy data for return_items (continued)
INSERT INTO return_items (return_item_id, return_id, order_item_id, quantity) VALUES
(3, 2, 4, 1);

-- Dummy data for return_reasons (continued)
INSERT INTO return_reasons (return_reason_id, reason_name) VALUES
(3, 'Not as described');

-- Dummy data for return_actions (continued)
INSERT INTO return_actions (action_id, action_name) VALUES
(3, 'Repair');

-- Dummy data for customer_reviews (continued)
INSERT INTO customer_reviews (review_id, customer_id, rating, review_text) VALUES
(3, 2, 3, 'Decent product.'),
(4, 2, 5, 'Absolutely love it!');

-- Dummy data for customer_reviews_likes (continued)
INSERT INTO customer_reviews_likes (like_id, review_id, user_id) VALUES
(3, 3, 1),
(4, 4, 1);

-- Dummy data for customer_reviews_comments (continued)
INSERT INTO customer_reviews_comments (comment_id, review_id, user_id, comment_text) VALUES
(3, 3, 1, 'I agree, it could be better.'),
(4, 4, 1, 'So happy with my purchase!');

-- Dummy data for orders_history (continued)
INSERT INTO orders_history (order_id, customer_id, order_date, total_amount) VALUES
(3, 2, '2023-10-01', 1000),
(4, 2, '2023-09-15', 1200);

-- Dummy data for product_reviews (continued)
INSERT INTO product_reviews (review_id, product_id, username, password_hash, email, role_id) VALUES
(1, 'admin_user', 'admin_password', 'admin@example.com', 1),
(2, 'customer_user', 'customer_password', 'customer@example.com', 2),
(3, 'supplier_user', 'supplier_password', 'supplier@example.com', 3);

-- Admins
INSERT INTO admins (admin_id, user_id) VALUES
(1, 1);

-- Customers
INSERT INTO customers (customer_id, user_id) VALUES
(2, 2);

-- Customer Details
INSERT INTO customer_details (customer_id, first_name, last_name, phone_number) VALUES
(2, 'John', 'Doe', '123-456-7890');

-- Addresses
INSERT INTO addresses (address_id, customer_id, address_line1, city, state, postal_code, country) VALUES
(1, 2, '123 Main St', 'Cityville', 'Stateville', '12345', 'Countryland');

-- Shopping Carts
INSERT INTO shopping_carts (cart_id, customer_id, created_at) VALUES
(1, 2, CURRENT_TIMESTAMP);

-- Cart Items
INSERT INTO cart_items (cart_item_id, cart_id, product_id, quantity) VALUES
(1, 1, 1, 2),
(2, 1, 2, 1);

-- Customer Payments
INSERT INTO customer_payments (payment_id, customer_id, amount, payment_date) VALUES
(1, 2, 1500, CURRENT_TIMESTAMP);

-- Customer Activities
INSERT INTO customer_activities (activity_id, customer_id, activity_type, activity_date) VALUES
(1, 2, 'Login', CURRENT_TIMESTAMP),
(2, 2, 'Purchase', CURRENT_TIMESTAMP);

-- Wishlists
INSERT INTO wishlists (wishlist_id, customer_id, created_at) VALUES
(1, 2, CURRENT_TIMESTAMP);

-- Wishlist Items
INSERT INTO wishlist_items (wishlist_item_id, wishlist_id, product_id) VALUES
(1, 1, 3),
(2, 1, 4);

-- Notifications
INSERT INTO notifications (notification_id, user_id, message, is_read, created_at) VALUES
(1, 2, 'New Product Arrived!', FALSE, CURRENT_TIMESTAMP),
(2, 2, 'Your order has shipped.', FALSE, CURRENT_TIMESTAMP);

-- Site Reviews
INSERT INTO site_reviews (review_id, user_id, rating, review_text, created_at) VALUES
(1, 2, 5, 'Great website!', CURRENT_TIMESTAMP),
(2, 2, 4, 'Easy to navigate.', CURRENT_TIMESTAMP);

-- Customer Messages
INSERT INTO customer_messages (message_id, sender_id, receiver_id, message_text, created_at) VALUES
(1, 2, 1, 'Hello Admin!', '2024-01-10'),
(2, 1, 2, 'Hi Customer!', '2024-01-11');

-- Categories
INSERT INTO categories (category_id, category_name, parent_category_id) VALUES
(1, 'Electronics', NULL),
(2, 'Laptops', 1),
(3, 'Clothing', NULL),
(4, 'Shoes', 3);

-- Category Closure
INSERT INTO category_closure (ancestor_category_id, descendant_category_id, depth) VALUES
(1, 1, 0),
(1, 2, 1),
(3, 3, 0),
(3, 4, 1);

-- Products
INSERT INTO products (product_id, product_name, category_id, brand_id) VALUES
(1, 'Laptop A', 2, 1),
(2, 'Laptop B', 2, 1),
(3, 'T-shirt', 4, NULL),
(4, 'Running Shoes', 4, NULL);

-- Product Brands
INSERT INTO product_brands (brand_id, brand_name) VALUES
(1, 'Brand X'),
(2, 'Brand Y');

-- Product Attributes
INSERT INTO product_attributes (attribute_id, attribute_name) VALUES
(1, 'Color'),
(2, 'Weight');

-- Product Images
INSERT INTO product_images (image_id, product_id, image_url) VALUES
(1, 1, 'image_url_1'),
(2, 1, 'image_url_2'),
(3, 2, 'image_url_3'),
(4, 3, 'image_url_4'),
(5, 4, 'image_url_5');

-- Product Reviews
INSERT INTO product_reviews (review_id, product_id, user_id, rating, review_text, created_at) VALUES
(1, 1, 2, 5, 'Excellent laptop!', CURRENT_TIMESTAMP),
(2, 2, 2, 4, 'Good performance.', CURRENT_TIMESTAMP),
(3, 3, 2, 4, 'Comfortable and stylish.', CURRENT_TIMESTAMP),
(4, 4, 2, 3, 'Decent shoes for running.', CURRENT_TIMESTAMP);

-- Product Ratings
INSERT INTO product_ratings (rating_id, product_id, user_id, rating, created_at) VALUES
(1, 1, 2, 5, CURRENT_TIMESTAMP),
(2, 2, 2, 4, CURRENT_TIMESTAMP),
(3, 3, 2, 4, CURRENT_TIMESTAMP),
(4, 4, 2, 3, CURRENT_TIMESTAMP);

-- Discounts
INSERT INTO discounts (discount_id, discount_code, discount_percentage, start_date, end_date) VALUES
(1, 'DISCOUNT10', 10, '2024-01-01', '2024-12-31'),
(2, 'DISCOUNT20', 20, '2024-01-01', '2024-12-31');

-- Promotions
INSERT INTO promotions (promotion_id, promotion_name, start_date, end_date) VALUES
(1, 'Summer Sale', '2024-06-01', '2024-06-30'),
(2, 'Holiday Special', '2024-12-01', '2024-12-31');

-- Product Promotions
INSERT INTO product_promotions (product_id, promotion_id) VALUES
(1, 1),
(2, 2);

-- Orders
INSERT INTO orders (order_id, customer_id, order_date, total_amount) VALUES
(1, 2, '2024-01-10', 1500),
(2, 2, '2024-01-11', 2000);

-- Order Items
INSERT INTO order_items (order_item_id, order_id, product_id, quantity, subtotal) VALUES
(1, 1, 1, 2, 800),
(2, 1, 2, 1, 700),
(3, 2, 3, 1, 250),
(4, 2, 4, 1, 750);

-- Order Tracking
INSERT INTO order_tracking (tracking_id, order_id, status, update_date) VALUES
(1, 1, 'Processing', '2024-01-12'),
(2, 2, 'Shipped', '2024-01-13');

-- Order Payments
INSERT INTO order_payments (payment_id, order_id, amount, payment_date) VALUES
(1, 1, 1500, '2024-01-12'),
(2, 2, 2000, '2024-01-13');

-- Order Returns
INSERT INTO order_returns (return_id, order_id, customer_id, return_reason_id, status, created_at) VALUES
(1, 1, 2, 1, 'Processing', '2024-01-14'),
(2, 2, 2, 2, 'Approved', '2024-01-15');

-- Return Items
INSERT INTO return_items (return_item_id, return_id, order_item_id, quantity) VALUES
(1, 1, 1, 1),
(2, 2, 3, 1);

-- Return Reasons
INSERT INTO return_reasons (return_reason_id, reason_name) VALUES
(1, 'Defective'),
(2, 'Changed Mind');

-- Return Actions
INSERT INTO return_actions (action_id, action_name) VALUES
(1, 'Refund'),
(2, 'Exchange');

-- Product Tags
INSERT INTO product_tags (tag_id, tag_name) VALUES
(1, 'New Arrival'),
(2, 'Bestseller'),
(3, 'Sale');

-- Product Tags Mapping
INSERT INTO product_tags_mapping (product_id, tag_id) VALUES
(1, 1),
(1, 2),
(2, 2),
(2, 3),
(3, 1),
(4, 3);

-- Variant Categories
INSERT INTO variant_categories (category_id, category_name) VALUES
(1, 'Size'),
(2, 'RAM Size');

-- Product Variants
INSERT INTO product_variants (variant_id, product_id, category_id, variant_name) VALUES
(1, 1, 1, 'Large'),
(2, 1, 2, '8GB'),
(3, 2, 1, 'Medium'),
(4, 2, 2, '16GB'),
(5, 3, 1, 'XL'),
(6, 4, 1, '10.5');

-- Product Variant Values
INSERT INTO product_variant_values (value_id, variant_id, value_name) VALUES
(1, 1, 'Large'),
(2, 2, '8GB'),
(3, 3, 'Medium'),
(4, 4, '16GB'),
(5, 5, 'XL'),
(6, 6, '10.5');

-- Suppliers
INSERT INTO suppliers (supplier_id, supplier_name, contact_person, contact_email, contact_phone) VALUES
(1, 'Supplier A', 'John Supplier', 'john.supplier@example.com', '555-1234'),
(2, 'Supplier B', 'Jane Supplier', 'jane.supplier@example.com', '555-5678');

-- Attributes
INSERT INTO attributes (attribute_id, attribute_name) VALUES
(1, 'Color'),
(2, 'Weight');

-- Additional Tables (if needed)

-- Customer Reviews
INSERT INTO customer_reviews (review_id, customer_id, rating, review_text, created_at) VALUES
(3, 2, 4, 'Good experience overall.', CURRENT_TIMESTAMP),
(4, 2, 5, 'Love the product!', CURRENT_TIMESTAMP);

-- Customer Reviews Likes
INSERT INTO customer_reviews_likes (like_id, review_id, user_id, created_at) VALUES
(3, 3, 1, CURRENT_TIMESTAMP),
(4, 4, 1, CURRENT_TIMESTAMP);

-- Customer Reviews Comments
INSERT INTO customer_reviews_comments (comment_id, review_id, user_id, comment_text, created_at) VALUES
(3, 3, 1, 'I agree, it was a good experience!', CURRENT_TIMESTAMP),
(4, 4, 1, 'Glad you love it!', CURRENT_TIMESTAMP);

-- Orders History
INSERT INTO orders_history (order_id, customer_id, order_date, total_amount) VALUES
(3, 2, '2023-12-05', 1200),
(4, 2, '2023-11-20', 1800);

