const { StatusCodes, ReasonPhrases } = require("http-status-codes");

const categoryService = require("../services/category.service");
const categoryRepository = require("../repositories/category.repository");

const category = new categoryService(new categoryRepository());

async function getCategories(req, res) {
  try {
    const categories = await category.getCategories();
    res.status(StatusCodes.OK).json(categories);
  } catch (error) {
    console.log(error);
  }
}

async function getCategory(req, res) {
  try {
    const { id } = req.params;
    const category = await category.getCategory(id);
    if (!category) {
      res.status(StatusCodes.NOT_FOUND).send(ReasonPhrases.NOT_FOUND);
    }
    res.status(StatusCodes.OK).json(category);
  } catch (error) {
    console.log(error);
  }
}

async function createCategory(req, res) {
  try {
    const newCategory = await category.createCategory(req.body);
    res.status(StatusCodes.CREATED).json(newCategory);
  } catch (error) {
    console.log(error);
  }
}

async function updateCategory(req, res) {
  try {
    const { id } = req.params;
    const updatedCategory = await category.updateCategory(id, req.body);
    if (!updatedCategory) {
      res.status(StatusCodes.NOT_FOUND).send(ReasonPhrases.NOT_FOUND);
    }
    res.status(StatusCodes.OK).json(updatedCategory);
  } catch (error) {
    console.log(error);
  }
}

async function deleteCategory(req, res) {
  try {
    const { id } = req.params;
    const deletedCategory = await category.deleteCategory(id);
    if (!deletedCategory) {
      res.status(StatusCodes.NOT_FOUND).send(ReasonPhrases.NOT_FOUND);
    }
    res.status(StatusCodes.NO_CONTENT).send(ReasonPhrases.NO_CONTENT);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
