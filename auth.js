const jwt = require("jsonwebtoken");
const { jwtConfig } = require("./config");
const { User } = require("./db/models");
const bearerToken = require("express-bearer-token");

const { secret, expiresIn } = jwtConfig;

const getUserToken = (user) => {
    // Don't store the user's hashed password
    // in the token data.
    const userDataForToken = {
        id: user.id,
        email: user.email,
    };

    // Create the token.
    const token = jwt.sign(
        { data: userDataForToken },
        secret,
        { expiresIn: parseInt(expiresIn, 10) } // 604,800 seconds = 1 week
    );

    return token;
};

const restoreUser = (req, res, next) => {
    // token being parsed from request header by the bearerToken middleware
    // function in app.js:
    const { token } = req;

    if (!token) {
        // console.log("no token found via auth")
        return next();
    }

    return jwt.verify(token, secret, null, async (err, jwtPayload) => {
        if (err) {
            err.status = 401;
            return next(err);
        }
        // pull user id from payload
        const { id } = jwtPayload.data;

        try {
            // search db by user id and set that user to request object
            req.user = await User.findByPk(id);
        } catch (e) {
            return next(e);
        }

        if (!req.user) {
            // if no user on req obj, meaning user wasnt found
            // Send a "401 Unauthorized" response status code
            // along with an "WWW-Authenticate" header value of "Bearer".
            console.log("no user found on req via auth")
            return res.set("WWW-Authenticate", "Bearer").status(401).end();
        }

        return next();
    });
};

const verifyStatus = (req, res, next) => {
    if (!req.cookies.logToken) {
        if (req.path === "/") {
            return next()
        }
        // return res.status(401).render("homepage")
        return res.redirect('/')
    }
    next()
}

const requireAuth = [bearerToken(), restoreUser];

module.exports = { verifyStatus, getUserToken, requireAuth };
