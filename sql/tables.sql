CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    surname VARCHAR(50),
    email VARCHAR(100),
    password VARCHAR(200),
);

CREATE TABLE userFiles (
    file_id INT AUTO_INCREMENT PRIMARY KEY,
    id INT,
    phone VARCHAR(10),
    idNumber VARCHAR(13),
    address VARCHAR(50)
    content VARCHAR(10000),
    FOREIGN KEY (id) REFERENCES users(id)
);

