
const express = require('express');
const router = express.Router();
const { check } = require("express-validator");
const { asyncHandler, handleValidationErrors } = require("../utils");
const { requireAuth } = require("../auth");

const db = require("../db/models");

router.get("/", asyncHandler(async(req, res) => {
    const books = await db.Book.findAll({ limit: 6 })
    res.json(({ books }))
}))

router.get('/:id', asyncHandler(async(req, res)=> {
    const bookId = req.params.id
    res.send(`You are viewing book number ${bookId}`)
}));

module.exports = {
    router
};