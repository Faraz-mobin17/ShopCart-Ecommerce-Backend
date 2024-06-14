class CategoryService {
  constructor(repository) {
    this.repository = repository;
  }
  async createCategory(category) {
    // Create category
    const response = await repository.createCategory(category);
    return response.data;
  }
  async getCategories() {
    // Get categories
    const response = await repository.getCategories();
    return response.data;
  }
  async getCategory(id) {
    // Get category by id
    const response = await repository.getCategory(id);
    return response.data;
  }
  async updateCategory(id, category) {
    // Update category
    const response = await repository.updateCategory(id, category);
    return response.data;
  }
  async deleteCategory(id) {
    // Delete category
    const response = await repository.deleteCategory(id);
    return response.data;
  }
}

module.exports = CategoryService;
