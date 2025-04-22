const { sql } = require("../config/db");
const { catchAsync, AppError } = require("../utils/errorHandler");

exports.getAllProducts = catchAsync(async (req, res, next) => {
  const products = await sql`
        SELECT * FROM products ORDER BY created_at DESC
        `;
  res.status(200).json({
    success: true,
    message: "Products fetched successfully",
    products,
  });
});

exports.createProduct = catchAsync(async (req, res, next) => {
  const { name, price, image } = req.body;

  const existingProduct = await sql`
      SELECT * FROM products WHERE name = ${name}
    `;

  if (existingProduct.length > 0) {
    return next(new AppError("Product with this name already exists", 400));
  }

  const newProduct = await sql`
      INSERT INTO products (name, price, image)
      VALUES (${name}, ${price}, ${image})
      RETURNING *
    `;

  if (!newProduct || newProduct.length === 0) {
    return next(new AppError("Failed to create product", 500));
  }

  res.status(201).json({
    success: true,
    message: "Product created successfully",
    product: newProduct[0],
  });
});

exports.getProduct = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  if (!id || isNaN(id)) {
    return next(new AppError("Invalid product ID", 400));
  }
  const result = await sql`
  SELECT * FROM products WHERE id=${id}
  `;

  if (result.length === 0) {
    return next(new AppError("Product not found", 404));
  }

  res
    .status(200)
    .json({ success: true, message: "Product found", product: result[0] });
});

exports.updateProduct = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { name, price, image } = req.body;

  if (!id || isNaN(id)) {
    return next(new AppError("Invalid product ID", 400));
  }

  const product = await sql`
    SELECT *
    FROM products 
    WHERE id = ${id}
  `;

  if (product.length === 0) {
    return next(new AppError("Product not found", 404));
  }

  const updatedFields = {};
  if (name) updatedFields.name = name;
  if (price) updatedFields.price = price;
  if (image) updatedFields.image = image;

  const updatedProduct = await sql`
    UPDATE products 
    SET ${sql(updatedFields)}
    WHERE id = ${id}
    RETURNING *;
  `;

  res.status(200).json({
    success: true,
    message: "Product updated successfully",
    product: updatedProduct[0],
  });
});

exports.deleteProduct = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  if (!id || isNaN(id)) {
    return next(new AppError("Invalid product ID", 400));
  }

  const product = await sql`
    SELECT id FROM products WHERE id = ${id}
  `;

  if (product.length === 0) {
    return next(new AppError("Product not found", 404));
  }

  await sql`
    DELETE FROM products WHERE id = ${id}
  `;

  res.status(200).json({
    success: true,
    message: "Product deleted successfully",
  });
});
