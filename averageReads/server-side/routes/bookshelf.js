const express = require('express');
const path = require('path');

const { check } = require("express-validator");
const { asyncHandler, handleValidationErrors } = require("../utils");
const db = require("../db/models");

const router = express.Router();

router.use(express.static(path.join("public")));

router.get("/:id", asyncHandler(async (req, res, next) => {

    const userId = req.params.id;

    try {
        const booksReading = await db.Bookshelf.findAll(
            {
                where: {
                    userId,
                    reading: true
                },
                include: db.Book
            });
        const booksHaveRead = await db.Bookshelf.findAll(
            {
                where: {
                    userId,
                    haveRead: true
                },
                include: db.Book

            });
        const booksWantsToRead = await db.Bookshelf.findAll(
            {
                where: {
                    userId,
                    wantsToRead: true
                },
                include: db.Book
            });
        console.log('okay')
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
