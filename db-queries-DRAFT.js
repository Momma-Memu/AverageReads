//list all books
//by parameter (title, author, ratings)
//in ASC or DESC order
//with optional limit (useful for frontpage slider or for suggestions)
const db = require("./averageReads/db/models");

async function getBooksBy(param = 'title', ascOrDesc = 'ASC', numberOfBooks = Infinity) {
    //wrap database query in try catch block in case there's an error
    try {
        const books = await db.Book.findAll(
            {
                order: [[`${param}`, `${ascOrDesc}`]],
                limit: numberOfBooks,
            });

        const relevantBooksInfo = books.map(book => {
            const newBook = {};
            newBook.title = book.title;
            newBook.author = book.author;
            newBook.description = book.description.split(' ').slice(0, 15).join(' ');
            return newBook;
        });

        //render pug page
        //relevantBooksInfo is an array of books with relevant information to be displayed on list of books
        //show on table (or however results are displayed)

        // title          author           first 15 words of description

    } catch (err) {
        next(err);
    }
}

//shows one book details
//by id

async function getBookById(bookId) {

    try {
        const book = await db.Book.findOne(bookId)

        //render page with book details 
        //book details includes
        // book.title  book.author   book.description  book.rating   book.published    book.publisher   book.image

    } catch (err) {
        next(err)
    }
}


//list books that belong to a user's bookshelf
//by userId
//by 'wants to read' or 'have read'

async function getUsersBooks(userId, wantsToRead, haveRead) {

    try {
        //find all books that have userId match
        //function can be used for finding wishlist books (wantsToRead=true, haveRead=false)
        //function can be used for finding wishlist books (wantsToRead=false, haveRead=true)
        const books = await db.Bookshelf.findAll({
            where: {
                userId,
                wantsToRead: wantsToRead,
                haveRead: haveRead,
            },
            include: 'Books',
        });
    } catch (err) {
        next(err);
    }
}

//finds books that match specific criteria
