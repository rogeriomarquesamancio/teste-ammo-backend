-- CreateTable
CREATE TABLE `product` (
    `idProduct` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `originalPrice` DOUBLE NOT NULL,
    `promotionalPrice` DOUBLE NOT NULL,
    `category` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `product_idProduct_key`(`idProduct`),
    PRIMARY KEY (`idProduct`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `productImage` (
    `idImage` INTEGER NOT NULL AUTO_INCREMENT,
    `idProduct` INTEGER NOT NULL,
    `src` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `productImage_idImage_key`(`idImage`),
    PRIMARY KEY (`idImage`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `productImage` ADD CONSTRAINT `productImage_idProduct_fkey` FOREIGN KEY (`idProduct`) REFERENCES `product`(`idProduct`) ON DELETE RESTRICT ON UPDATE CASCADE;
