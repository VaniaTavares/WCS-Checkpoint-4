DROP DATABASE IF EXISTS wishlist;
CREATE DATABASE wishlist;
USE wishlist;

DROP TABLE IF EXISTS users;
CREATE TABLE users(
`id` INT PRIMARY KEY AUTO_INCREMENT,
`username` VARCHAR(30) NOT NULL,
`email` VARCHAR(80) UNIQUE NOT NULL,
`hashed_password` VARCHAR(255) NOT NULL,
`status` VARCHAR(40) DEFAULT "Active",
    `created_at` DATETIME DEFAULT now(),
    `updated_at` DATETIME DEFAULT now() ON UPDATE now(),
    `last_access` DATETIME DEFAULT now(),
`failed attempts` INT NOT NULL DEFAULT 0,
`admin` BOOLEAN DEFAULT FALSE
) ENGINE = InnoDB DEFAULT CHARSET = UTF8MB4;

DROP TABLE IF EXISTS restaurants;
CREATE TABLE restaurants(
`id` VARCHAR(255) PRIMARY KEY,
`restaurant_name` VARCHAR(100) NOT NULL,
`address` VARCHAR(255) NOT NULL,
`img_url` VARCHAR(255) NOT NULL,
`votes` INT NOT NULL DEFAULT 0
) ENGINE = InnoDB DEFAULT CHARSET = UTF8MB4;

DROP TABLE IF EXISTS comments;
CREATE TABLE comments (
  `comment_id` INT PRIMARY KEY AUTO_INCREMENT,
  `comment` VARCHAR(250) NOT NULL,
  `date` DATETIME NOT NULL DEFAULT now(),
  `user_id` INT NOT NULL,
  `restaurant_id` VARCHAR(255) NOT NULL,
  CONSTRAINT `f_user_comment`
    FOREIGN KEY (`user_id`)
    REFERENCES `users` (`id`),
  CONSTRAINT `f_restaurant_comment`
    FOREIGN KEY (`restaurant_id`)
    REFERENCES `restaurants` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
    )
ENGINE = InnoDB DEFAULT CHARSET = UTF8MB4;

DROP TABLE IF EXISTS users_restaurants;
CREATE TABLE users_restaurants (
  `user_id` INT NOT NULL,
  `restaurant_id` VARCHAR(255) NOT NULL,
  CONSTRAINT `f_user_index`
    FOREIGN KEY (`user_id`)
    REFERENCES `users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `f_restaurant_index`
    FOREIGN KEY (`restaurant_id`)
    REFERENCES `restaurants` (`id`)
    ) ENGINE = InnoDB DEFAULT CHARSET = UTF8MB4;
    
