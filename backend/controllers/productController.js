import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";

// @desc Fetch all products
// @route GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc Fetch a single product
// @route GET /api/products/:id
// @access Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// 1. in backend-controllers-productController, add database transaction, here removing it from the db
// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.remove();
    res.json({ message: "Product removed" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});
// now go to the 2nd step in backend-routes-productRoutes, where the routes are managed for these db operations 
// then test these operations with routes in postman before implementing them in frontend

export { getProducts, getProductById, deleteProduct };
