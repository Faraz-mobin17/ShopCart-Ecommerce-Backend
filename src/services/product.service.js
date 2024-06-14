class ProductService {
  constructor(repository) {
    this.repository = repository;
  }
  async createProduct(product) {
    // Create product
    const response = await repository.createProduct(product);
    return response.data;
  }

  async getProducts() {
    // Get products
    const response = await repository.getProducts();
    return response.data;
  }

  async getProduct(id) {
    // Get product by id
    const response = await repository.getProduct(id);
    return response.data;
  }
}

module.exports = ProductService;
