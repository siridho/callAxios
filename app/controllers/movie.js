const models = require("../models");
const { callUrl } = require("../../app/helpers/general");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const Joi = require("joi");

async function getAll(req, res) {
  const movies = await models.movie.findAll();

  return res.status(200).json({
    code: 200,
    status: "success",
    message: "list movies",
    data: movies,
  });
}

async function search(req, res) {
  const joiValidation = {
    s: Joi.string().required(),
  };
  await Joi.validate(req.query, joiValidation, (err, value) => {
    if (err) {
      res.status(500).json({
        status: "error",
        message: "Invalid request data",
        error: err.details[0].message,
      });
    }
  });
  try {
    const url = process.env.URL;
    const parameters = { apikey: process.env.KEY,...req.query };
    const result = await callUrl({ url, parameters });

    models.movie.create({ url, parameters: JSON.stringify(parameters) });
    return res.status(200).json({
      code: 200,
      status: "success",
      message: "search result",
      data: result.Search,
      totalData: result.totalResults,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Internal server error",
      error,
    });
  }
}

async function detail(req, res) {
  const { t, i } = req.query;

  if (!i && !t) {
    res.status(422).json({
      status: "error",
      message: "Invalid request data",
      error: `movieId or movie title must be provided`,
    });
  }

  try {
    const url = process.env.URL;
    const parameters = { apikey: process.env.KEY, ...req.query };
    const result = await callUrl({ url, parameters });
    models.movie.create({ url, parameters: JSON.stringify(parameters) });
    return res.status(200).json({
      code: 200,
      status: "success",
      message: "detail result",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Internal server error",
      error,
    });
  }
}

module.exports = {
  getAll,
  search,
  detail,
};
