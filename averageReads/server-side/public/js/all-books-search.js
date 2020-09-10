
// document.addEventListener('DOMContentLoaded', () => {
//     const searchTitle = document.querySelector("#title-btn");
//     const searchAuthor = document.querySelector("#author-btn");
//     const searchForm = document.querySelector('#search-form');

//     searchTitle.addEventListener("click", async (e) => {
//         // e.preventDefault();

//         const formData = new FormData(searchForm);
//         const searchQuery = formData.get("query");
//         const searchOption = 'title';

//         const body = { searchQuery, searchOption };
//         console.log(body);
//         const res = await fetch("http://localhost:8080/search-books", {
//             method: "POST",
//             body: JSON.stringify(body),
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         });
//     });

//     searchAuthor.addEventListener("click", async (e) => {
//         // e.preventDefault();
//         const formData = new FormData(searchForm);
//         const searchQuery = formData.get("query");
//         const searchOption = 'author';

//         const body = { searchQuery, searchOption };

//         const res = await fetch("http://localhost:8080/search-books", {
//             method: "POST",
//             body: JSON.stringify(body),
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         });

//         const { bookResults } = await res.json();
//         console.log('books:', bookResults);
//     });
// });
