const { StatusCodes, ReasonPhrases } = require("http-status-codes");

const ProductService = require("../services/product.service");
const ProductRepository = require("../repositories/product.repository");

const productService = new ProductService(new ProductRepository());

async function createProduct(req, res) {
  try {
    const { body } = req;
    const product = await productService.createProduct(body);
    res.status(StatusCodes.CREATED).json(product);
  } catch (error) {
    console.log("somethign went wrong", error);
  }
}

async function getProducts(req, res) {
  try {
    const products = await productService.getProducts();
    res.status(StatusCodes.OK).json(products);
  } catch (error) {
    console.log("somethign went wrong", error);
  }
}

async function getProduct(req, res) {
  try {
    const { id } = req.params;
    const product = productService.getProduct(id);
    res.status(StatusCodes.OK).json(product);
  } catch (error) {
    console.log("somethign went wrong", error);
  }
}

module.exports = {
  createProduct,
  getProducts,
  getProduct,
};
