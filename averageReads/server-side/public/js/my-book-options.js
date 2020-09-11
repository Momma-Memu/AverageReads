document.addEventListener('DOMContentLoaded', async () => {
    const haveReadBtn = document.querySelector('#have-read');
    const readingBtn = document.querySelector('#reading');
    const wantToReadBtn = document.querySelector('#want-to-read');

    const userId = localStorage.getItem('AVG_READS_CURRENT_USER_ID');
    const body = { userId };
    const getBook = document.querySelector('.get-book').classList;
    const bookId = getBook[getBook.length - 1];

    const res = await fetch(`/books/${bookId}/check-bookshelf`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json",
        },
    });

    const options = await res.json()
    if (options.reading) readingBtn.setAttribute('disabled', 'true');
    if (options.wantsToRead) wantToReadBtn.setAttribute('disabled', 'true');
    if (options.haveRead) haveReadBtn.setAttribute('disabled', 'true');

    wantToReadBtn.addEventListener('click', async () => {
        try {
            res = await fetch(`/books/${bookId}/wants-to-read`, {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json",
                },
            });
        } catch (err) {
            console.log(err);
        }
        if (res.status === 204) {
            alert('Book added to wishlist!');
        } else if (res.status === 304) {
            alert('Book already in your collection.')
        }
    });

    readingBtn.addEventListener('click', async () => {
        try {
            res = await fetch(`/books/${bookId}/reading`, {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json",
                },
            });
        } catch (err) {
            console.log(err);
        }
        if (res.status === 204) {
            alert('Book added to reading list!');
        } else if (res.status === 304) {
            alert('Go outside and finish you book!')
        }
    });

    haveReadBtn.addEventListener('click', async () => {
        try {
            res = await fetch(`/books/${bookId}/have-read`, {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json",
                },
            });
        } catch (err) {
            console.log(err);
        }
        if (res.status === 204) {
            alert('Book added to reading list!');
        } else if (res.status === 304) {
            alert('Book already marked as read, maybe you want to read it again?')
        }
    });
});