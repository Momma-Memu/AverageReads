const express = require("express");
const { asyncHandler } = require("../utils");
const db = require("../db/models");
const fetch = require('node-fetch');

const router = express.Router();


router.get("/home", asyncHandler(async (req, res) => {
  const books = await db.Book.findAll({ limit: 6 })
  const data = await fetch('https://opinionated-quotes-api.gigalixirapp.com/v1/quotes')
  const quote = await data.json()
  const qod = quote.quotes[0]
  console.log(qod)
  res.render("start-page", { books, qod });
}));

//homepage
router.get("/", (req, res) => {
  res.render("homepage");
});

//DB Populate Route
router.get('/db-populate', (req, res) => {
  res.render('db-populate');
})

//aboutus page
router.get('/about-us', (req, res) => {
  res.render('about-us')
})

router.get('/our-mission', (req, res) => {
  //placeholder for mission
  res.send('our-mission')
})

// //bookshelf
// router.get('/mybooks', asyncHandler(async (req, res) => {
//   console.log(req);
//   res.render('bookshelf');
// }));

module.exports = {
  router
}
