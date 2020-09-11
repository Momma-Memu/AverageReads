
const express = require('express');
const router = express.Router();
const { check } = require("express-validator");
const path = require("path");
const { asyncHandler, handleValidationErrors } = require("../utils");
const { requireAuth } = require("../auth");

const { renderBookshelf } = require('./bookshelf')
const db = require("../db/models");
const { nextTick } = require('process');

router.use(express.static(path.join("public")));

router.get("/", asyncHandler(async (req, res) => {
    const books = await db.Book.findAll({ limit: 6 })
    res.json({ books })
}))

router.get('/:id', asyncHandler(async (req, res) => {
    const bookId = parseInt(req.params.id, 10)
    const book = await db.Book.findByPk(bookId)
    const date = book.published.getFullYear().toString()

    const comments = await db.Comment.findAll({
        where: {
            bookId
        },
        include: db.User
    })

    res.render('book', { book, date, comments, bookId })
}));

router.post('/:id/wants-to-read', asyncHandler(async (req, res) => {
    const bookId = parseInt(req.params.id, 10);
    const { userId } = req.body;

    //check if book already exists in user's collection
    const isBook = await db.Bookshelf.findOne({
        where: {
            bookId,
            userId
        }
    });

    if (isBook) {
        res.send(304);
        return;
    }

    //create new Bookshelf entry
    const newBookshelfItem = {
        userId,
        bookId,
        haveRead: false,
        wantsToRead: true,
        reading: false,
    }

    try {
        await db.Bookshelf.create(newBookshelfItem);
    } catch (err) {
        console.log(err);
    }

    res.send(204);
}));

router.post('/:id/reading', asyncHandler(async (req, res) => {
    const bookId = parseInt(req.params.id, 10);
    const { userId } = req.body;

    //check if book already exists in user's collection
    const isBook = await db.Bookshelf.findOne({
        where: {
            bookId,
            userId,
        }
    });

    if (isBook) {
        res.send(304);
        return;
    }

    //create new Bookshelf entry
    const newBookshelfItem = {
        userId,
        bookId,
        haveRead: false,
        wantsToRead: false,
        reading: true,
    }

    try {
        await db.Bookshelf.create(newBookshelfItem);
    } catch (err) {
        console.log(err);
    }

    res.send(204);
}));

router.put('/:id/reading', asyncHandler(async (req, res) => {
    const bookId = parseInt(req.params.id, 10);
    const { userId } = req.body;
    //check if book already exists in user's collection
    const isBook = await db.Bookshelf.findOne({
        where: {
            bookId,
            userId,
        }
    });
    //create new Bookshelf entry
    const newBookshelfItem = {
        userId,
        bookId,
        haveRead: false,
        wantsToRead: false,
        reading: true,
    }
    try {
        await isBook.update(newBookshelfItem);
    } catch (err) {
        console.log(err);
    }
    await renderBookshelf(userId, res)
}));

router.post('/:id/have-read', asyncHandler(async (req, res) => {
    const bookId = parseInt(req.params.id, 10);
    const { userId } = req.body;

    //check if book already exists in user's collection
    const isBook = await db.Bookshelf.findOne({
        where: {
            bookId,
            userId,
        }
    });

    //create new Bookshelf entry
    const newBookshelfItem = {
        userId,
        bookId,
        haveRead: true,
        wantsToRead: false,
        reading: false,
    }

    try {
        await isBook.update(newBookshelfItem);
    } catch (err) {
        console.log(err);
    }
    await renderBookshelf(userId, res)
}));

router.put('/:id/have-read', asyncHandler(async (req, res) => {
    const bookId = parseInt(req.params.id, 10);
    const { userId } = req.body;

    //check if book already exists in user's collection
    const isBook = await db.Bookshelf.findOne({
        where: {
            bookId,
            userId,
        }
    });
    console.log('after finding bookshelf book')
    //create new Bookshelf entry
    const newBookshelfItem = {
        userId,
        bookId,
        haveRead: true,
        wantsToRead: false,
        reading: false,
    }
    console.log('before try catch of script')
    try {
        await isBook.update(newBookshelfItem);
    } catch (err) {
        console.log(err);
    }
    console.log('end of script')
    await renderBookshelf(userId, res);
}));

router.delete('/:id/destroy', asyncHandler(async (req, res) => {
    const bookId = parseInt(req.params.id, 10);
    console.log(bookId)
    const { userId } = req.body;
    console.log(userId)
    try {
        await db.Bookshelf.destroy({
            where: {
                bookId,
                userId
            }
        });
    } catch (err) {
        console.log(err);
    }
    console.log('end of script')
    await renderBookshelf(userId, res);
}));

router.post('/:id/check-bookshelf', asyncHandler(async (req, res) => {
    const bookId = parseInt(req.params.id, 10);
    const { userId } = req.body;

    //check if book already exists in user's collection
    const isBook = await db.Bookshelf.findOne({
        where: {
            bookId,
            userId
        }
    });

    if (isBook) {
        var options = {
            haveRead: isBook.haveRead,
            reading: isBook.reading,
            wantsToRead: isBook.wantsToRead
        }
    }
    res.json(options);
}));

module.exports = {
    router
};