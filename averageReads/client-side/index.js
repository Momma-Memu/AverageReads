const express = require("express");
const path = require("path");
const cors = require('cors');
const fetch = require('node-fetch')

const app = express();

app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));


const asyncHandler = (handler) => (req, res, next) =>
    handler(req, res, next).catch(next);

//cors
app.use(cors({ origin: 'http://localhost:8080' }));

app.get("/home", asyncHandler(async(req, res) => {
  const result = await fetch('http://localhost:8080/books')
  const { books } = await result.json()
  const qoute = await fetch('https://opinionated-quotes-api.gigalixirapp.com/v1/quotes')
    .then(qod => qod.json())
  const qod = qoute.quotes[0]
  console.log(books)
  console.log(qod)
  res.render("start-page", { books, qod });
}));

app.get("/", (req, res) => {
  res.render("homepage");
});

//DB Populate Route
app.get('/db-populate', (req, res) => {
  res.render('db-populate');
})

//aboutus page

app.get('/about-us', (req, res) => {
  res.render('about-us')
})

const port = 4000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
