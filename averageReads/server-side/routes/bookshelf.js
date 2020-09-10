const express = require('express');
const router = express.Router();
const { check } = require("express-validator");
const { asyncHandler, handleValidationErrors } = require("../utils");
const { requireAuth } = require("../auth");

const db = require("../db/models");

router.get("/", asyncHandler(async (req, res, next) => {
    //const userId = parseInt(req.params.id, 10);
    try {
        const booksReading = await db.Bookshelf.findAll(
            {
                where: {
                    userId: 3,
                    reading: true
                },
                include: db.Book

            });
        const booksHaveRead = await db.Bookshelf.findAll(
            {
                where: {
                    userId: 3,
                    haveRead: true
                },
                include: db.Book

            });
        const booksWantsToRead = await db.Bookshelf.findAll(
            {
                where: {
                    userId: 3,
                    wantsToRead: true
                },
                include: db.Book
            });

        const br = booksReading.map(book => {
            const newBook = {};
            newBook.title = book.Book.title;
            newBook.author = book.Book.author;
            newBook.description = book.Book.description.split(' ').slice(0, 15).join(' ');
            newBook.image = book.Book.image;
            return newBook;
        });

        const bhr = booksHaveRead.map(book => {
            const newBook = {};
            newBook.title = book.Book.title;
            newBook.author = book.Book.author;
            newBook.description = book.Book.description.split(' ').slice(0, 15).join(' ');
            newBook.image = book.Book.image;
            return newBook;
        });

        const bwtr = booksWantsToRead.map(book => {
            const newBook = {};
            newBook.title = book.Book.title;
            newBook.author = book.Book.author;
            newBook.description = book.Book.description.split(' ').slice(0, 15).join(' ');
            newBook.image = book.Book.image;
            return newBook;
        });

        res.render('my-books', { br, bhr, bwtr });

    } catch (err) {
        next(err);
    }
}));

module.exports = {
    router
};
