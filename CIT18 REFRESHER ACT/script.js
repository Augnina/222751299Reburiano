document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tabs button");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            // Remove active class from all tabs and contents
            tabs.forEach((t) => t.classList.remove("active"));
            contents.forEach((content) => content.classList.remove("active"));

            // Add active class to the clicked tab and its content
            tab.classList.add("active");
            const target = tab.getAttribute("data-tab");
            document.getElementById(target).classList.add("active");
        });
    });

    // Dark mode toggle
    const darkModeToggle = document.getElementById("toggle-dark-mode");
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});
