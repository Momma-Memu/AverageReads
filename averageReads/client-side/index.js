const express = require("express");
const path = require("path");
const cors = require('cors');

const app = express();

app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

//cors
app.use(cors({ origin: 'http://localhost:8080' }));

// app.get("/", (req, res) => {
//   res.render("start-page");
// });

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
