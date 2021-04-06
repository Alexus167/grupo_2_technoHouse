-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema technohousedb
-- -----------------------------------------------------
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`cards`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`cards` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userNum` INT NOT NULL,
  `expiratioDate` INT(4) NOT NULL,
  `securityCode` INT(4) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`adresses`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`adresses` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `streeth` VARCHAR(45) NOT NULL,
  `number` INT(4) NOT NULL,
  `pc` INT(4) NOT NULL,
  `state` VARCHAR(45) NOT NULL,
  `town` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(45) NOT NULL,
  `lastName` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `cards_id` INT NULL,
  `adresses_id` INT NULL,
  PRIMARY KEY (`id`, `email`),
  INDEX `userCardFk_idx` (`cards_id` ASC),
  INDEX `userAdressFK_idx` (`adresses_id` ASC),
  CONSTRAINT `userCardFk`
    FOREIGN KEY (`cards_id`)
    REFERENCES `mydb`.`cards` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `userAdressFK`
    FOREIGN KEY (`adresses_id`)
    REFERENCES `mydb`.`adresses` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `price` INT UNSIGNED NOT NULL,
  `discount` INT UNSIGNED NOT NULL,
  `categories_id` INT NOT NULL,
  `upload_at` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  INDEX `idProductsFK_idx` (`categories_id` ASC),
  CONSTRAINT `idCategoriesFK`
    FOREIGN KEY (`categories_id`)
    REFERENCES `mydb`.`categories` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`carts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`carts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `price` INT UNSIGNED NOT NULL,
  `users_id` INT NOT NULL,
  `products_id` INT NOT NULL,
  `sell_at` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  INDEX `idUsersFK_idx` (`users_id` ASC),
  INDEX `idProductsFK_idx` (`products_id` ASC),
  CONSTRAINT `fk_users_id`
    FOREIGN KEY (`users_id`)
    REFERENCES `mydb`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_products_id`
    FOREIGN KEY (`products_id`)
    REFERENCES `mydb`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`admins`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`admins` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `users_id` INT NOT NULL,
  `products_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `idUsersFK_idx` (`users_id` ASC),
  INDEX `idProductsFK_idx` (`products_id` ASC),
  CONSTRAINT `adminUsers`
    FOREIGN KEY (`users_id`)
    REFERENCES `mydb`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `adminProducts`
    FOREIGN KEY (`products_id`)
    REFERENCES `mydb`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
