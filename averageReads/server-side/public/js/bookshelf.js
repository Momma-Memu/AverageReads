document.addEventListener('DOMContentLoaded', () => {
    const userId = localStorage.getItem('AVG_READS_CURRENT_USER_ID');

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

    const details = document.querySelector("#event-listener");
    details.addEventListener("click", async (e) => {
        e.preventDefault();
        const bookId = parseInt(e.target.classList[e.target.classList.length - 1]);
        console.log(e.target.classList)
        if (e.target.classList.contains('details-btn')) {
            window.location.href = `/books/${bookId}`;
        }

        if (e.target.classList.contains('start-book')) {
            const body = {
                bookId,
                userId
            }
            try {
                var res = await fetch(`/books/${bookId}/reading`, {
                    method: "PUT",
                    body: JSON.stringify(body),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
            } catch (err) {
                console.log(err);
            }
            if (res.status === 204) {
                alert('Good job! Book marked as finito!');
            } else if (res.status === 304) {
                alert('Book already in your collection.')
            }
        }

        if (e.target.classList.contains('completed-book')) {
            const body = {
                bookId,
                userId
            }
            try {
                res = await fetch(`/books/${bookId}/have-read`, {
                    method: "PUT",
                    body: JSON.stringify(body),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
            } catch (err) {
                console.log(err);
            }
            if (res.status === 204) {
                alert('Good job! Book marked as finito!');
            } else if (res.status === 304) {
                alert('Book already in your collection.')
            }
        }

        if (e.target.classList.contains('destroy-book')) {
            const body = {
                bookId,
                userId
            }
            try {
                res = await fetch(`/books/${bookId}/destroy`, {
                    method: "DELETE",
                    body: JSON.stringify(body),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
            } catch (err) {
                console.log(err);
            }
            if (res.status === 204) {
                alert('Book is gone!');
            } else if (res.status === 304) {
                alert('Book already in your collection.')
            }
        }
    });
});
