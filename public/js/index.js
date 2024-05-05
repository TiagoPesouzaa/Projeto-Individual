
$(document).ready(function () {
    $('#mobile-btn').on('click', function () {
        $('#mobile-menu').toggleClass('active')
        $('#mobile-btn').find('i').toggleClass('fa-x')
    });

    // criando as constantes que serão usadas na função abaixo.
    const sections = $('section');
    const navItems = $('.nav-itens');

    // Quando rolar a página
    $(window).on('scroll', function () {

        const header = $('header'); // const para chamar o header
        const scrollPosition = $(window).scrollTop() - header.outerHeight();   // constv : para achar a posição da rolagem. | conta : tamanho da janela - altura do header        

        let activeSectionIndex = 0; // em qual SESSÃO que esse index está.


        // if para analisar se a posição da scroll está antes ou depois do tamanho da header, 
        // que no caso, menor que zero ainda está no header, após passar desse número, a box shadow aparecerá.

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none')
        } else {
            header.css('box-shadow', '5px 2px 5px rgba(0, 0, 0, 0.1');
        }

        // para fazer a linha nos itens da navbar passarem de um lugar para o outro e fazer a página rolar de acordo com isso.
        sections.each(function (i) {
            const section = $(this); // é a prórpia sessão que estou pegando.
            const sectionTop = section.offset().top - 96; // para saber quando que eu cheguei no topo. top - 96 (navbar)
            const sectionBottom = sectionTop + section.outerHeight(); // sessão do topo + tamanho da sessão | para saber quando chegar embaixo.

            // if para saber se a sessão da rolagem está dentro da área da sessão específica.

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) { // se a rolagem está dentro do top e do bottom.
                activeSectionIndex = i; // o activeSectionIndex está recebendo a posição da sessão (i).
                return false; // para sair do looping.
            }
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');

    console.log(scrollPosition); //Para analisar em que posição - em número - está a rolagem (scroll);
 
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%',
    });

    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '20%',
    });

    ScrollReveal().reveal('#testimonials-chef', {
        origin: 'left',
        duration: 2000,
        distance: '20%',
    });

    ScrollReveal().reveal('#feedbacks', {
        origin: 'right',
        duration: 2000,
        distance: '20%',
    });
});

