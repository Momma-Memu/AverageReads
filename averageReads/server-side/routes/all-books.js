const express = require('express');
const router = express.Router();
const { check } = require("express-validator");
const { asyncHandler, handleValidationErrors } = require("../utils");
const { requireAuth } = require("../auth");
const { Op } = require("sequelize");

const db = require("../db/models");

router.use(requireAuth);

router.get('/', asyncHandler(async (req, res) => {
    const books = await db.Book.findAll();

    const bookResults = books.map(book => {
        const newBook = {};
        newBook.id = book.id;
        newBook.title = book.title;
        newBook.author = book.author;
        newBook.description = `${book.description.split(' ').slice(0, 100).join(' ')}...`;
        newBook.image = book.image;
        return newBook;
    });

    res.render('books', { bookResults });
}));

async function getBooksBy(search, ascOrDesc = 'ASC', next) {
    //wrap database query in try catch block in case there's an error
    try {
        return await db.Book.findAll(
            {
                order: [['title', `${ascOrDesc}`]],
                where: {
                    [Op.or]: {
                        'title': {
                            [Op.iLike]: `%${search}%`,
                        },
                        'author': {
                            [Op.iLike]: `%${search}%`
                        }
                    }
                }
            });
    } catch (err) {
        next(err);
    }
}

router.post('/', asyncHandler(async (req, res, next) => {
    console.log('asdasd')
    const { query } = req.body;
    console.log(req);
    const books = await getBooksBy(query, ascOrDesc = 'ASC', numberOfBooks = Infinity, next);
    console.log(books);
    const bookResults = books.map(book => {
        const newBook = {};
        newBook.id = book.id;
        newBook.title = book.title;
        newBook.author = book.author;
        newBook.description = `${book.description.split(' ').slice(0, 100).join(' ')}...`;
        newBook.image = book.image;
        return newBook;
    });
    console.log(bookResults);
    res.render('books', { bookResults });

}));

module.exports = { router };
