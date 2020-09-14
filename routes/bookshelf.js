const express = require('express');
const path = require('path');

const { check } = require("express-validator");
const { asyncHandler, handleValidationErrors } = require("../utils");
const db = require("../db/models");
const { verifyStatus } = require('../auth');

const router = express.Router();

router.use(express.static(path.join("public")));

router.get("/:id", verifyStatus, asyncHandler(async (req, res, next) => {
    const userId = req.params.id;
    renderBookshelf(userId, res);
}));

module.exports = {
    router,
    renderBookshelf
};

async function renderBookshelf(userId, res) {
    // console.log('ASSDASDWAwef3wf3wf23f123f231asdasd')
    try {
        var booksReading = await db.Bookshelf.findAll(
            {
                where: {
                    userId,
                    reading: true
                },
                include: db.Book
            });
    } catch (err) {
        console.log('first one', err)
    }
    try {
        var booksHaveRead = await db.Bookshelf.findAll(
            {
                where: {
                    userId,
                    haveRead: true
                },
                include: db.Book

            });
    } catch (err) {
        console.log('first one', err)
    }
    try {
        var booksWantsToRead = await db.Bookshelf.findAll(
            {
                where: {
                    userId,
                    wantsToRead: true
                },
                include: db.Book
            });
    } catch (err) {
        console.log('first one', err)
    }

    console.log('okay')
    const br = booksReading.map(book => {
        const newBook = {};
        newBook.id = book.Book.id;
        newBook.title = book.Book.title;
        newBook.author = book.Book.author;
        newBook.description = book.Book.description.split(' ').slice(0, 15).join(' ');
        newBook.image = book.Book.image;
        return newBook;
    });

    const bhr = booksHaveRead.map(book => {
        const newBook = {};
        newBook.id = book.Book.id;
        newBook.title = book.Book.title;
        newBook.author = book.Book.author;
        newBook.description = book.Book.description.split(' ').slice(0, 15).join(' ');
        newBook.image = book.Book.image;
        return newBook;
    });

    const bwtr = booksWantsToRead.map(book => {
        const newBook = {};
        newBook.id = book.Book.id;
        newBook.title = book.Book.title;
        newBook.author = book.Book.author;
        newBook.description = book.Book.description.split(' ').slice(0, 15).join(' ');
        newBook.image = book.Book.image;
        return newBook;
    });
    res.render('my-books', { br, bhr, bwtr });

}
