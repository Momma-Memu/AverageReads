
const express = require('express');
const router = express.Router();
const { check } = require("express-validator");
const path = require("path");
const { asyncHandler, handleValidationErrors } = require("../utils");
const { requireAuth } = require("../auth");

const db = require("../db/models");

router.use(express.static(path.join("public")));

router.get("/", asyncHandler(async(req, res) => {
    const books = await db.Book.findAll({ limit: 6 })
    res.json({ books })
}))

router.get('/:id', asyncHandler(async(req, res)=> {
    const bookId = parseInt(req.params.id, 10)
    const book = await db.Book.findByPk(bookId)
    const date = book.published.getFullYear().toString()

    const comments = await db.Comment.findAll({
        where: {
            bookId
        },
        include: db.User
    })

    res.render('book',{ book, date, comments })
}));

module.exports = {
    router
};