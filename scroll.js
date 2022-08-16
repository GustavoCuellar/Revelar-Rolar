function reveal () {
    var reveal = document.querySelectorAll(".reveal");

    reveal.forEach((reveal) => {
        var windowHeight = window.innerHeight;
        var elementTop = reveal.getBoundingClientRect().top;
        var elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add("active");
        } else {
            reveal.classList.remove("active")
        }
    })
}

window.addEventListener("scroll", reveal);