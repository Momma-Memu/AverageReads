
const express = require('express');
const router = express.Router();
const { check } = require("express-validator");
const { asyncHandler, handleValidationErrors } = require("../utils");
const { requireAuth } = require("../auth");

const db = require("../db/models");

// router.get('/:bookId', asyncHandler(async (req, res) => {

// }))

router.post("/:id/:bookId", asyncHandler(async(req, res) => {
    const userId = parseInt(req.params.id, 10)
    const bookId = parseInt(req.params.bookId, 10)

    const comment = await db.Comment.create({ message: req.body.message, userId, bookId })
    const user = await db.User.findByPk(userId)
    res.json({ comment, user })
}))

module.exports = {
    router
};
