document.addEventListener("DOMContentLoaded", async() => {
    try{
        const res = await fetch('http://localhost:8080/mybooks/2')
        const { books } = await res.json()
        console.log(books)
        books.forEach(book => {
            console.log(book.Book)
        });

        if(res.status === 401){
            window.location.href = "/log-in";
            return;
        }
    } catch{

    }
})

// this file is not completed yet, it's purpose is to populate the start-page with the necessary content.