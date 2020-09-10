// const books = (async function () {
//     const id = localStorage.getItem("AVG_READS_CURRENT_USER_ID");

//     const res = await fetch(`http://localhost:8080/mybooks/3`);

//     const books = await res.json();

//     console.log(books)

//     for (let book in books.books) {

//     }
// })();


document.addEventListener('DOMContentLoaded', () => {

    const reading = document.querySelector('#reading');
    const haveRead = document.querySelector('#have-read');
    const wantsToRead = document.querySelector('#wants-to-read');

    document.querySelector('.reading').classList.remove('not-visible');

    reading.addEventListener('click', () => {
        document.querySelector('.reading').classList.remove('not-visible');
        document.querySelector('.have-read').classList.add('not-visible');
        document.querySelector('.wants-to-read').classList.add('not-visible');;
    });

    haveRead.addEventListener('click', () => {
        document.querySelector('.have-read').classList.remove('not-visible');
        document.querySelector('.wants-to-read').classList.add('not-visible');;
        document.querySelector('.reading').classList.add('not-visible');
    });

    wantsToRead.addEventListener('click', () => {
        document.querySelector('.wants-to-read').classList.remove('not-visible');;
        document.querySelector('.reading').classList.add('not-visible');
        document.querySelector('.have-read').classList.add('not-visible');
    });
});

