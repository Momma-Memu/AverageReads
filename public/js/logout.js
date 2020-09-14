//navigation for logging out.
const logout = document.getElementById('logout')
const deleteCookie = (name) => {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

logout.addEventListener('click', () => {
    // const token = localStorage.getItem('AVG_READS_ACCESS_TOKEN');
    deleteCookie("logToken");
    window.localStorage.clear();
    window.location.href = "/";
});
