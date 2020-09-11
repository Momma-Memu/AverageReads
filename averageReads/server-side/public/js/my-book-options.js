document.addEventListener('DOMContentLoaded', async () => {
    const haveReadBtn = document.querySelector('#have-read');
    const readingBtn = document.querySelector('#reading');
    const wantToReadBtn = document.querySelector('#want-to-read');

    const userId = localStorage.getItem('AVG_READS_CURRENT_USER_ID');
    let body = { userId };
    const getBook = document.querySelector('.get-book').classList;
    const bookId = getBook[getBook.length - 1];

    const res = await fetch(`http://localhost:8080/books/${bookId}/check-bookshelf`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json",
        },
    });

    const options = await res.json();
    console.log(options);
    if (options.reading) {
        readingBtn.setAttribute('disabled', 'true');
    }
    if (options.wantsToRead) {
        wantToReadBtn.setAttribute('disabled', 'true');
    }
    if (options.haveRead) {
        haveReadBtn.setAttribute('disabled', 'true');
    }
    wantToReadBtn.addEventListener('click', async () => {
        try {
            var res = await fetch(`http://localhost:8080/books/${bookId}/wants-to-read`, {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json",
                },
            });
        } catch (err) {
            console.log(err);
        }
        location.reload();
    });

    readingBtn.addEventListener('click', async () => {
        try {
            var res = await fetch(`http://localhost:8080/books/${bookId}/reading`, {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json",
                },
            });
        } catch (err) {
            console.log(err);
        }
        location.reload();
    });

    haveReadBtn.addEventListener('click', async () => {
        try {
            var res = await fetch(`http://localhost:8080/books/${bookId}/have-read`, {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json",
                },
            });
        } catch (err) {
            console.log(err);
        }
        location.reload();
    });
});