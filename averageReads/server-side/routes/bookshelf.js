
const express = require('express');
const router = express.Router();
const { check } = require("express-validator");
const { asyncHandler, handleValidationErrors } = require("../utils");
const { requireAuth } = require("../auth");

const db = require("../db/models");

router.get("/:id", asyncHandler(async(req, res) => {
    const id = parseInt(req.params.id, 10);
    console.log(id)
    const books = await db.Bookshelf.findAll({
        limit: 6,
        where:{
            userId: id
        }, include: db.Book
     })
    res.json({ books })
}))


module.exports = {
    router
};
