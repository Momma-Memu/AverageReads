// event listeners for front page books of the week to redirect on click.
const books = document.querySelectorAll('.botw')

books.forEach(book => {
    book.addEventListener('click', (e)=> {
        const bookId = e.target.nextSibling.nextSibling.innerHTML
        //token to be used later when requireAuth is applied to the book route
        const token = localStorage.getItem('AVG_READS_ACCESS_TOKEN')

        window.location.href = `books/${bookId}`;
    })
});
