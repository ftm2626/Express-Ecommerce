DROP DATABASE ecommerce;
CREATE DATABASE ecommerce;
USE ecommerce;
-- Users and Roles
CREATE TABLE roles (
    role_id INT PRIMARY KEY,
    role_name VARCHAR(50) NOT NULL
);
CREATE TABLE users (
    user_id INT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    role_id INT,
    FOREIGN KEY (role_id) REFERENCES roles(role_id)
);
CREATE TABLE user_roles (
    role_id INT PRIMARY KEY,
    role_name VARCHAR(50) NOT NULL
);
-- Admins
CREATE TABLE admins (
    admin_id INT PRIMARY KEY,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);
-- Customers
CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);
CREATE TABLE customer_details (
    customer_id INT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    phone_number VARCHAR(20)
);
-- Addresses
CREATE TABLE addresses (
    address_id INT PRIMARY KEY,
    customer_id INT,
    address_line1 VARCHAR(255) NOT NULL,
    address_line2 VARCHAR(255),
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL,
    postal_code VARCHAR(20) NOT NULL,
    country VARCHAR(100) NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);
-- Shopping Carts
CREATE TABLE shopping_carts (
    cart_id INT PRIMARY KEY,
    customer_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);
-- Categories
CREATE TABLE categories (
    category_id INT PRIMARY KEY,
    category_name VARCHAR(100) NOT NULL,
    parent_category_id INT,
    FOREIGN KEY (parent_category_id) REFERENCES categories(category_id)
);
CREATE TABLE category_closure (
    ancestor_category_id INT,
    descendant_category_id INT,
    depth INT,
    FOREIGN KEY (ancestor_category_id) REFERENCES categories(category_id),
    FOREIGN KEY (descendant_category_id) REFERENCES categories(category_id)
);
-- Products and Variants
CREATE TABLE product_brands (
    brand_id INT PRIMARY KEY,
    brand_name VARCHAR(100) NOT NULL
);
CREATE TABLE products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    category_id INT,
    brand_id INT,
    FOREIGN KEY (category_id) REFERENCES categories(category_id),
    FOREIGN KEY (brand_id) REFERENCES product_brands(brand_id)
);
CREATE TABLE product_attributes (
    attribute_id INT PRIMARY KEY,
    attribute_name VARCHAR(100) NOT NULL
);
CREATE TABLE product_images (
    image_id INT PRIMARY KEY,
    product_id INT,
    image_url VARCHAR(255) NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);
CREATE TABLE product_reviews (
    review_id INT PRIMARY KEY,
    product_id INT,
    user_id INT,
    rating INT,
    review_text TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(product_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);
CREATE TABLE product_ratings (
    rating_id INT PRIMARY KEY,
    product_id INT,
    user_id INT,
    rating INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(product_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);
CREATE TABLE discounts (
    discount_id INT PRIMARY KEY,
    discount_code VARCHAR(50) NOT NULL,
    discount_percentage DECIMAL(5, 2) NOT NULL,
    start_date TIMESTAMP,
    end_date TIMESTAMP
);
CREATE TABLE promotions (
    promotion_id INT PRIMARY KEY,
    promotion_name VARCHAR(100) NOT NULL,
    start_date TIMESTAMP,
    end_date TIMESTAMP
);
CREATE TABLE product_promotions (
    product_id INT,
    promotion_id INT,
    PRIMARY KEY (product_id, promotion_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id),
    FOREIGN KEY (promotion_id) REFERENCES promotions(promotion_id)
);
CREATE TABLE cart_items (
    cart_item_id INT PRIMARY KEY,
    cart_id INT,
    product_id INT,
    quantity INT,
    FOREIGN KEY (cart_id) REFERENCES shopping_carts(cart_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);
-- Customer Payments
CREATE TABLE customer_payments (
    payment_id INT PRIMARY KEY,
    customer_id INT,
    amount DECIMAL(10, 2) NOT NULL,
    payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);
-- Customer Activities
CREATE TABLE customer_activities (
    activity_id INT PRIMARY KEY,
    customer_id INT,
    activity_type VARCHAR(50) NOT NULL,
    activity_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);
-- Wishlists
CREATE TABLE wishlists (
    wishlist_id INT PRIMARY KEY,
    customer_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);
CREATE TABLE wishlist_items (
    wishlist_item_id INT PRIMARY KEY,
    wishlist_id INT,
    product_id INT,
    FOREIGN KEY (wishlist_id) REFERENCES wishlists(wishlist_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);
-- Notifications
CREATE TABLE notifications (
    notification_id INT PRIMARY KEY,
    user_id INT,
    message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);
-- Site Reviews
CREATE TABLE site_reviews (
    review_id INT PRIMARY KEY,
    user_id INT,
    rating INT,
    review_text TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);
-- Customer Messages
CREATE TABLE customer_messages (
    message_id INT PRIMARY KEY,
    sender_id INT,
    receiver_id INT,
    message_text TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (sender_id) REFERENCES users(user_id),
    FOREIGN KEY (receiver_id) REFERENCES users(user_id)
);
-- Orders
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    total_amount DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);
CREATE TABLE order_items (
    order_item_id INT PRIMARY KEY,
    order_id INT,
    product_id INT,
    quantity INT,
    subtotal DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);
CREATE TABLE order_tracking (
    tracking_id INT PRIMARY KEY,
    order_id INT,
    status VARCHAR(50) NOT NULL,
    update_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (order_id) REFERENCES orders(order_id)
);
CREATE TABLE order_payments (
    payment_id INT PRIMARY KEY,
    order_id INT,
    amount DECIMAL(10, 2) NOT NULL,
    payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (order_id) REFERENCES orders(order_id)
);
-- Returns
CREATE TABLE return_reasons (
    return_reason_id INT PRIMARY KEY,
    reason_name VARCHAR(100) NOT NULL
);
CREATE TABLE order_returns (
    return_id INT PRIMARY KEY,
    order_id INT,
    customer_id INT,
    return_reason_id INT,
    status VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
    FOREIGN KEY (return_reason_id) REFERENCES return_reasons(return_reason_id)
);
CREATE TABLE return_items (
    return_item_id INT PRIMARY KEY,
    return_id INT,
    order_item_id INT,
    quantity INT,
    FOREIGN KEY (return_id) REFERENCES order_returns(return_id),
    FOREIGN KEY (order_item_id) REFERENCES order_items(order_item_id)
);
CREATE TABLE return_actions (
    action_id INT PRIMARY KEY,
    action_name VARCHAR(100) NOT NULL
);
-- Product Tags
CREATE TABLE product_tags (
    tag_id INT PRIMARY KEY,
    tag_name VARCHAR(50) NOT NULL
);
CREATE TABLE product_tags_mapping (
    product_id INT,
    tag_id INT,
    PRIMARY KEY (product_id, tag_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id),
    FOREIGN KEY (tag_id) REFERENCES product_tags(tag_id)
);
-- Variant Categories and Values
CREATE TABLE variant_categories (
    category_id INT PRIMARY KEY,
    category_name VARCHAR(100) NOT NULL
);
CREATE TABLE product_variants (
    variant_id INT PRIMARY KEY,
    product_id INT,
    category_id INT,
    variant_name VARCHAR(100) NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(product_id),
    FOREIGN KEY (category_id) REFERENCES variant_categories(category_id)
);
CREATE TABLE product_variant_values (
    value_id INT PRIMARY KEY,
    variant_id INT,
    value_name VARCHAR(100) NOT NULL,
    FOREIGN KEY (variant_id) REFERENCES product_variants(variant_id)
);
-- Suppliers
CREATE TABLE suppliers (
    supplier_id INT PRIMARY KEY,
    supplier_name VARCHAR(100) NOT NULL,
    contact_person VARCHAR(100),
    contact_email VARCHAR(255),
    contact_phone VARCHAR(20)
);
-- Attributes
CREATE TABLE attributes (
    attribute_id INT PRIMARY KEY,
    attribute_name VARCHAR(100) NOT NULL
);
-- Customer Reviews
CREATE TABLE customer_reviews (
    review_id INT PRIMARY KEY,
    customer_id INT,
    rating INT,
    review_text TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);
CREATE TABLE customer_reviews_likes (
    like_id INT PRIMARY KEY,
    review_id INT,
    user_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (review_id) REFERENCES customer_reviews(review_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);
CREATE TABLE customer_reviews_comments (
    comment_id INT PRIMARY KEY,
    review_id INT,
    user_id INT,
    comment_text TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (review_id) REFERENCES customer_reviews(review_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);
-- Order History
CREATE TABLE orders_history (
    order_id INT PRIMARY KEY,
    customer_id INT,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    total_amount DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);
