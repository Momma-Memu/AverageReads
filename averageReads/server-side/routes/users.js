const express = require("express");
const bcrypt = require("bcryptjs");
const { check } = require("express-validator");
const { asyncHandler, handleValidationErrors } = require("../utils");
const { getUserToken, requireAuth } = require("../auth");
const router = express.Router();
const db = require("../db/models");

const { User, Bookshelf } = db;
const validatePassword = function (password) {
    // because this is a model instance method, `this` is the user instance here:
    return bcrypt.compareSync(password, this.hashedPassword.toString());
}
const validateEmailAndPassword = [
    check("email")
        .exists({ checkFalsy: true })
        .isEmail()
        .withMessage("Please provide a valid email."),
    check("password")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a password."),
    handleValidationErrors,
];

router.post(
    "/",
    check("username")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a username"), validateEmailAndPassword, asyncHandler(async (req, res) => {
            const { username, email, password } = req.body;
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await User.create({ username, email, hashedPassword });

            const token = getUserToken(user);
            res.status(201).json({
                user: { id: user.id },
                token,
            });
            console.log(`${username} created...`);
        })
);

router.post("/token", validateEmailAndPassword, asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    console.log(email)
    const user = await User.findOne({
        where: {
            email,
        },
    });
    console.log(user)
    if (!user || !user.validatePassword(password)) {
        const err = new Error("Login failed");
        err.status = 401;
        err.title = "Login failed";
        err.errors = ["The provided credentials were invalid."];
        return next(err);
    }
    const token = await getUserToken(user);
    console.log(token)
    res.json({ token, user: { id: user.id } });
})
);

router.get("/mybooks", requireAuth, asyncHandler(async (req, res, next) => {

    const mybooks = await Bookshelf.findAll({
        where: {
            userId: req.params.id,
            // parseint^
        },
    });
    res.json({ mybooks });
})
);

module.exports = router;
