document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;

    // Check if user already has a preference
    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
        darkModeToggle.textContent = "🌙 Dark Mode";
    }

    // Toggle Dark/Light Mode on Click
    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("light-mode");

        // Save Preference in Local Storage
        if (body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
            darkModeToggle.textContent = "🌙 Dark Mode";
        } else {
            localStorage.setItem("theme", "dark");
            darkModeToggle.textContent = "☀️ Light Mode";
        }
    });
});
