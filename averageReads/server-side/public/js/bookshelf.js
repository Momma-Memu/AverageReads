const books = (async function () {
    const id = localStorage.getItem("AVG_READS_CURRENT_USER_ID");

    const res = await fetch(`http://localhost:8080/mybooks/3`);

    const books = await res.json();

    console.log(books)

    for (let book in books.books) {
        book.
    }
})();


