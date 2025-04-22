const { Router } = require("express");
const {
  getAllProducts,
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/productController");
const { validateProductBody } = require("../middlewares/validation.middleware");

const router = Router();

router.get("/products", getAllProducts);
router.post("/products", validateProductBody, createProduct);
router.get("/products/:id", getProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

module.exports = router;
