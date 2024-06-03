// Quando rolar a página
$(window).on("scroll", function () {
    const header = $("header"); // apenas chamo o elemento header
    const scrollPosition = $(window).scrollTop(); // posicao da rolagem

    // Adiciona ou remove a sombra no header com base na posição de rolagem
    if (scrollPosition > header.outerHeight()) {
        header.css("box-shadow", "5px 2px 5px rgba(0, 0, 0, 0.1)");
    } else {
        header.css("box-shadow", "none");
    }
});

ScrollReveal().reveal("#cta", {
    origin: "left",
    duration: 3000,
    distance: "20%",
});

ScrollReveal().reveal(".dish", {
    origin: "left",
    duration: 2000,
    distance: "20%",
});

ScrollReveal().reveal("#testimonials-chef", {
    origin: "left",
    duration: 2000,
    distance: "20%",
});

ScrollReveal().reveal("#feedbacks", {
    origin: "right",
    duration: 2000,
    distance: "20%",
});

ScrollReveal().reveal(".carousel", {
    origin: "right",
    duration: 2500,
    distance: "20%",
});

ScrollReveal().reveal(".space-onu", {
    origin: "left",
    duration: 2500,
    distance: "20%",
});

ScrollReveal().reveal("#banner", {
    origin: "right",
    duration: 3000,
    distance: "20%",
});

// });
