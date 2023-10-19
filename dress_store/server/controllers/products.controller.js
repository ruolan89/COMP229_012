const Products = require("../models/products.model.js");
const extend = require("lodash/extend.js");
const errorHandler = require("./error.controller.js");
const create = async (req, res) => {
  const products = new Products(req.body);
  try {
    await products.save();
    return res.status(200).json({
      message: "Successfully added!",
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};
const list = async (req, res) => {
  try {
    let products = await Products.find().select(
      "name description price quantity category"
    );
    return res.json(products);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};
const productByID = async (req, res) => {
    try {
      let products = await Products.findById(req.params.id);
      if (!products)
        return res.status("400").json({
          error: "Product not found",
        });
        return res.json(products);
    } catch (err) {
      return res.status("400").json({
        error: "Could not retrieve product",
      });
    }
};
const productByName = async (req, res, next, name) => {
  try {
    let products = await Products.find({name: String(name)});
    if (!products)
      return res.status("400").json({
        error: "Product not found",
      });
      return res.json(products);
  } catch (err) {
    return res.status("400").json({
      error: "Could not retrieve product",
    });
  }
};

const update = async (req, res) => {
  try {
    await Products.findByIdAndUpdate(req.params.id, req.body);
    res.send("Successfully updated!");
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};
const remove = async (req, res) => {
  try {
    let deletedUser = await Products.deleteMany({});
    res.json(deletedUser);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const removById = async (req, res) => {
    try {
        let products = await Products.findByIdAndRemove(req.params.id);
        if (!products)
          return res.status("400").json({
            error: "Product not found",
          });
          return res.send("Successfully deleted!");
      } catch (err) {
        return res.status("400").json({
          error: "Could not retrieve product",
        });
      }
  };

module.exports = { create, productByName, productByID, list, remove, removById, update };
