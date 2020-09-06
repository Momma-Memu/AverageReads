const express = require('express');
const db = require('../db/models');

//Require XMLHttpRequest module from node
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

//Require async handler 
const { asyncHandler } = require('../utils');

const router = express.Router();

//Define route '/populate-db/'
//Route makes random book request to the goodReads API
//Route sends response to frontend client to be parsed from XML format to JS Object
router.get('/', asyncHandler(async (req, res) => {
    //create new xhr XMLHttpRequest object 
    const xhr = new XMLHttpRequest();
    console.log('Eeehh we go! Fetching random book;)');
    //generate random number for fetching random book id
    let x = Math.floor(Math.random() * (50000 - 5000 + 1) + 100);
    //open fetch request
    xhr.open("GET", `https://www.goodreads.com/book/show/${x}.xml?key=1kGAgCELnQJuBOO98Nmxcw`);
    //send request
    xhr.send();
    //listens for response
    xhr.onload = function () {
        if (xhr.status != 200) { // analyze HTTP status of the response
            console.log(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
            res.send('no book');
        } else { // show the result
            //console.log(xhr.responseText); // response is the server
            const book = xhr.responseText;
            //console.log(book)
            //only accepts books with average rating between 2.00 - 3.99
            if (book.match(/<average_rating>[23].[0-9][0-9]<\/average_rating>/)) {
                //send book XML to client front end to be parsed into JS Object
                res.json({ book });
            } else {
                res.json({});
            }
        }
    };
}));

//POST route for receiving parsed 'book' in JS Object from front end
router.post('/', asyncHandler(async (req, res) => {
    try {
        //console.logs req.body
        console.log(req.body);
        //destructure book from body
        const { book } = req.body;
        //checks that data exists + grabs relevant data
        if (Array.isArray(book.GoodreadsResponse.book.authors.author)) {
            var author = book.GoodreadsResponse.book.authors.author[0].name['#text'];
        } else {
            if (book.GoodreadsResponse.book.authors.author.name['#text'] && typeof book.GoodreadsResponse.book.authors.author.name['#text'] === 'string') {
                var author = book.GoodreadsResponse.book.authors.author.name['#text'];
            } else {
                var author = '';
            }
        }
        if ((book.GoodreadsResponse.book.title['#text'] && typeof book.GoodreadsResponse.book.title['#text'] === 'string') || (book.GoodreadsResponse.book.work.original_title['#text'] && typeof book.GoodreadsResponse.book.work.original_title['#text'] === 'string')) {
            var title = book.GoodreadsResponse.book.title['#text'];
        } else {
            var title = '';
        }
        if (book.GoodreadsResponse.book.description['#text'] && typeof book.GoodreadsResponse.book.description['#text'] === 'string') {
            var description = book.GoodreadsResponse.book.description['#text'];
        } else {
            var description = '';
        }
        if (book.GoodreadsResponse.book.image_url['#text'] && typeof book.GoodreadsResponse.book.image_url['#text'] === 'string') {
            var image = book.GoodreadsResponse.book.image_url['#text'];
        } else {
            var image = '';
        }
        if (book.GoodreadsResponse.book.average_rating['#text'] && typeof book.GoodreadsResponse.book.average_rating['#text'] === 'string') {
            var rating = book.GoodreadsResponse.book.average_rating['#text'];
        } else {
            var rating = '';
        }
        if (book.GoodreadsResponse.book.publisher['#text'] && typeof book.GoodreadsResponse.book.publisher['#text'] === 'string') {
            var publisher = book.GoodreadsResponse.book.publisher['#text'];
        } else {
            var publisher = '';
        }
        const pubYear = book.GoodreadsResponse.book.publication_year['#text'];
        const pubMonth = book.GoodreadsResponse.book.publication_month['#text'];
        const pubDay = book.GoodreadsResponse.book.publication_day['#text'];
        const published = `${pubYear}-${pubMonth}-${pubDay}`;
        //create new entry from book object into DB
        if (author, title, description, image, publisher, published) {
            try {
                await db.Book.create({
                    title,
                    description,
                    image,
                    rating,
                    author,
                    publisher,
                    published
                });

            } catch (err) {
                console.log(err);
            }
        }
    } catch (err) {
        console.log(err);
    }
}));

module.exports = router;