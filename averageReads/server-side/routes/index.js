const express = require("express");
const { asyncHandler } = require("../utils");
const db = require("../db/models");
const fetch = require('node-fetch');

const router = express.Router();


router.get("/home", asyncHandler(async (req, res) => {
  const books = await db.Book.findAll({ limit: 6 })

  const data = await fetch('https://type.fit/api/quotes')
  const quote = await data.json()
  const qod = quote[Math.floor(Math.random() * 1000)]

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

module.exports = {
  router
}
