const Category = require("../models/category.model");

class CategoryRepository {
  async getCategories() {
    try {
      const categories = await Category.findAll();
      return categories;
    } catch (error) {
      console.error(error);
    }
  }

  async getCategory(id) {
    try {
      const category = await Category.findByPk(id);
      return category;
    } catch (error) {
      console.error(error);
    }
  }

  async createCategory(category) {
    try {
      const newCategory = await Category.create(category);
      return newCategory;
    } catch (error) {
      console.error(error);
    }
  }

  async updateCategory(id, category) {
    try {
      const updatedCategory = await Category.update(category, {
        where: { id },
      });
      return updatedCategory;
    } catch (error) {
      console.error(error);
    }
  }

  async deleteCategory(id) {
    try {
      const deletedCategory = await Category.destroy({ where: { id } });
      return deletedCategory;
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = CategoryRepository;
