document.addEventListener("DOMContentLoaded", function () {
    console.log("News Website Loaded!");

    // Search functionality (Dummy)
    document.getElementById("searchBar").addEventListener("input", function () {
        console.log("Searching: " + this.value);
    });
});
