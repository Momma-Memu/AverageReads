const express = require("express");
const path = require("path");
const cors = require('cors');
// Create the Express app.
const app = express();

// Set the pug view engine.
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

//cors
app.use(cors({ origin: 'http://localhost:8080' }));

// Define a route.
app.get("/", (req, res) => {
  res.render("start-page");
});

//DB Populate Route
app.get('/db-populate', (req, res) => {
  res.render('db-populate');
})

// Define a port and start listening for connections.
const port = 4000;

app.listen(port, () => console.log(`Listening on port ${port}...`));