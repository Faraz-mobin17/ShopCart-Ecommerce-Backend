const { default: axios } = require("axios");

class ProductRepository {
  async getProducts() {
    try {
      const response = await axios.get("http://fakestoreapi.com/products");
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  async getProduct(id) {
    try {
      const response = await axios.get(
        `http://fakestoreapi.com/products/${id}`
      );
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  async createProduct(product) {
    try {
      const response = await axios.post("http://fakestoreapi.com/products", {
        ...product,
      });
      return response;
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = ProductRepository;
