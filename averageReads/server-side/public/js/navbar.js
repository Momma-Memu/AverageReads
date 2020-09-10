//redirect for goodreads image to home page
const image = document.getElementById('avgreadsimages')
image.addEventListener('click', ()=> {
    window.location.href = "/home";
})

//redirect for home button on navbar
const home = document.getElementById('home')
home.addEventListener('click', ()=> {
    window.location.href = "/home";
})

//redirect for my books button on navbar
const myBooks = document.getElementById('mybooks')
const userId = localStorage.getItem('AVG_READS_CURRENT_USER_ID')
myBooks.addEventListener('click', ()=> {
    window.location.href = `/mybooks/${userId}`;
})

//redirect for about us button on navbar
const us = document.getElementById('aboutus')
us.addEventListener('click', ()=> {
    window.location.href = "/about-us";
})

//redirect for our mission button on navbar
const mission = document.getElementById('ourmission')
mission.addEventListener('click', ()=> {
    window.location.href = "/our-mission";
})
