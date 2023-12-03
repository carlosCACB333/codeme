-- Your SQL goes here
CREATE TABLE IF NOT EXISTS directories(
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    content TEXT,
    parent_id VARCHAR(255),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (parent_id) REFERENCES directories(id),
    CONSTRAINT directories_name_unique UNIQUE (name, parent_id)
);