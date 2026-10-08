// Select the theme toggle button
const themeToggle = document.getElementById("theme-toggle");

// Get the saved theme or use light mode by default
const savedTheme = localStorage.getItem("theme") || "light";

// Apply the saved theme when the page loads
document.documentElement.setAttribute("data-theme", savedTheme);

// Set the button text based on the current theme
themeToggle.textContent = savedTheme === "dark" ? "Light Mode" : "Dark Mode";

// Listen for clicks on the theme button
themeToggle.addEventListener("click", function () {

    // Get the current website theme
    const currentTheme = document.documentElement.getAttribute("data-theme");

    // Switch between light and dark mode
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    // Apply the new theme
    document.documentElement.setAttribute("data-theme", newTheme);

    // Save the selected theme
    localStorage.setItem("theme", newTheme);

    // Update the button text
    themeToggle.textContent = newTheme === "dark" ? "Light Mode" : "Dark Mode";

});