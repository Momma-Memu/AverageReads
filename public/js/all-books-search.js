
document.addEventListener('DOMContentLoaded', () => {
    const details = document.querySelector("#list");
    details.addEventListener("click", async (e) => {
        e.preventDefault();
        if (e.target.classList[e.target.classList.length - 1].match(/\d+/)) {
            console.log(e.target.classList[e.target.classList.length - 1]);
            window.location.href = `/books/${e.target.classList[e.target.classList.length - 1]}`;
        }
    });
});
