
const express = require('express');
const router = express.Router();
const { check } = require("express-validator");
const { asyncHandler, handleValidationErrors } = require("../utils");
const { requireAuth } = require("../auth");

const db = require("../db/models");

// router.post("/:id/:bookId", asyncHandler(async(req, res) => {

// }))

module.exports = {
    router
};
