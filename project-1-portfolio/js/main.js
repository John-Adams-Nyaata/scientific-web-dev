document.addEventListener("DOMContentLoaded", function () {

    const button = document.getElementById("infoBtn");
    const text = document.getElementById("infoText");

    let isVisible = false; // STATE

    button.addEventListener("click", function () {

        if (isVisible === false) {
            text.textContent =
                "I develop scientific dashboards, bioinformatics tools, and data visualization platforms.";
            button.textContent = "Hide My Focus";
            isVisible = true;
        } else {
            text.textContent = "";
            button.textContent = "Show My Focus";
            isVisible = false;
        }

    });

});