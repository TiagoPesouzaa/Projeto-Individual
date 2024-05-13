// Seleciona todas as imagens de feedback
const feedbackImages = document.querySelectorAll('.feedback-avatar');

// Adiciona um evento de clique para cada imagem
feedbackImages.forEach(image => {
    image.addEventListener('click', () => {
        // Clona a imagem clicada e adiciona ao card
        const clonedImage = image.cloneNode(true);
        document.getElementById('card').innerHTML = ''; // Limpa o conteúdo anterior do card
        document.getElementById('card').appendChild(clonedImage);

        // Exibe a sobreposição e o card
        document.getElementById('overlay').style.display = 'block';
        document.getElementById('card').style.display = 'block';
    });
});

// Evento para fechar o card quando clicar na sobreposição
document.getElementById('overlay').addEventListener('click', () => {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('card').style.display = 'none';
});
