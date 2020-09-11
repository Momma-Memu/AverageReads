
window.addEventListener("DOMContentLoaded", () => {

    google.books.load();

    function initialize() {
        var viewer = new google.books.DefaultViewer(document.getElementById('viewerCanvas'));
        console.log(viewer)
        viewer.load('ISBN:9780230120013');
    }

    google.books.setOnLoadCallback(initialize);
})
