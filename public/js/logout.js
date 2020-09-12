//navigation for logging out.
const logout = document.getElementById('logout')

logout.addEventListener('click', ()=> {
    window.localStorage.clear();
    window.location.href = "/";
});