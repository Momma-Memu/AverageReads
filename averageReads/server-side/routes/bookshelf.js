const express = require('express');
const router = express.Router();
const { check } = require("express-validator");
const { asyncHandler, handleValidationErrors } = require("../utils");
const { requireAuth } = require("../auth");

const db = require("../db/models");

router.get("/:id", asyncHandler(async (req, res) => {
    const userId = parseInt(req.params.id, 10);
    try {
        const books = await db.Bookshelf.findAll(
            {
                where: {
                    userId
                },
                include: db.Book
                // order: [[`${param}`, `${ascOrDesc}`]],
                // limit: numberOfBooks,
            });
        res.json({ books });
        const relevantBooksInfo = books.map(book => {
            const newBook = {};
            newBook.title = book.title;
            newBook.author = book.author;
            newBook.description = book.description.split(' ').slice(0, numberWords).join(' ');
            newBook.image = book.image;
            return newBook;
        });

        //render pug page
        //relevantBooksInfo is an array of books with relevant information to be displayed on list of books
        //show on table (or however results are displayed)

        // title          author           first 15 words of description

    } catch (err) {
        next(err);
    }
}));



module.exports = {
    router
};
