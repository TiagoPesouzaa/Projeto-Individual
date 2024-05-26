document.getElementById("options").addEventListener("click", function(event) {
    if (event.target.classList.contains("option")) {
        checkAnswer(event);
    }
});
