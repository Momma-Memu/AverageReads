const express = require("express");
const path = require("path");
const cors = require('cors');
const { asyncHandler } = require("../server-side/utils");

const app = express();

app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

//cors
app.use(cors({ origin: 'http://localhost:8080' }));

// app.get("/", (req, res) => {
//   res.render("start-page");
// });

//homepage
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

//bookshelf
app.get('/mybooks', asyncHandler(async (req, res) => {
  console.log(req);
  res.render('bookshelf');
}));

const port = 4000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
