//a DOM é uma manipução dos objetos, tanto html, csss, o document acessa funcionalidades deles. Ela é a modelagem do HTML
//o querySelect irá selecionar um objeto para mim baseado nos seletor CSS que temos ou html, elementos baseados em classes, id, body...
//querySelectorAll: Significa que irei pegar uma coleção de valores iguais
//addEventListener: é uma função, onde recebe os parâmeros, ele vai ver diversos eventos
//classList: pega tudo que tiver de classes 
//getAttribute: Pegaria tanto o class quanto id
const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for(let card of cards){
    card.addEventListener("click", function(){
        const videoId = card.getAttribute("id")
/*windows possbilita várias modelagens da DOM do html, coloquei que quero que ele vá para a página vídeo e 
pegará o id do card do meu vídeo, que eu quiser*/
        window.location.href = `/video?id=${videoId}`
    })
}
