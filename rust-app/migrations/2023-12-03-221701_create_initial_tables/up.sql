-- Your SQL goes here
CREATE TABLE IF NOT EXISTS users(
    id VARCHAR(255) PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    gender VARCHAR(255),
    phone VARCHAR(255),
    picture VARCHAR(255),
    status VARCHAR(255) NOT NULL DEFAULT 'PENDING_EMAIL_VERIFICATION',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);