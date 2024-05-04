
$(document).ready(function () {
    $('#mobile-btn').on('click', function () {
        $('#mobile-menu').toggleClass('active')
        $('#mobile-btn').find('i').toggleClass('fa-x')
    });

    // criando as constantes que serão usadas na função abaixo.
    const sections = $('section');
    const navItems = $('.nav-itens');

    // Quando rolar a página
    $(window).on('scroll', function (){

        const header = $('header');
       // const para achar a posição    |    tamanho da janela - altura do header           
        const scrollPosition = $(window).scrollTop() - header.outerHeight()
        
        let activeSectionIndex = 0;


        // if para analisar se a posição da scroll está antes ou depois do tamanho da header, 
        // que no caso, menor que zero ainda está no header, após passar desse número, a box shadow aparecerá.

        if (scrollPosition <= 0){
            header.css('box-shadow', 'none')    
        }  else{
            header.css('box-shadow','5px 2px 5px rgba(0, 0, 0, 0.1');
        }

        // console.log(scrollPosition) Para analisar em que posição - em número - está a rolagem (scroll);
        
    });
});

