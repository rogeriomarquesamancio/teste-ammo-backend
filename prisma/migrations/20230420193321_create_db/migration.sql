-- CreateTable
CREATE TABLE "product" (
    "idProduct" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "originalPrice" DOUBLE PRECISION NOT NULL,
    "promotionalPrice" DOUBLE PRECISION NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("idProduct")
);

-- CreateTable
CREATE TABLE "productImage" (
    "idImage" SERIAL NOT NULL,
    "idProduct" INTEGER NOT NULL,
    "src" TEXT NOT NULL,

    CONSTRAINT "productImage_pkey" PRIMARY KEY ("idImage")
);

-- CreateIndex
CREATE UNIQUE INDEX "product_idProduct_key" ON "product"("idProduct");

-- CreateIndex
CREATE UNIQUE INDEX "productImage_idImage_key" ON "productImage"("idImage");

-- AddForeignKey
ALTER TABLE "productImage" ADD CONSTRAINT "productImage_idProduct_fkey" FOREIGN KEY ("idProduct") REFERENCES "product"("idProduct") ON DELETE RESTRICT ON UPDATE CASCADE;
