'use strict'

const express = require("express");
const Router = express.Router();

const controller = require('../controllers/twitter');

    Router.get('/:screenName', controller.search);

module.exports = Router;