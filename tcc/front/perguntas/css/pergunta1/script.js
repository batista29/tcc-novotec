// Selecione todos os botões com a classe 'escolha' e adicione um evento de clique a cada um
const botoesEscolha = document.querySelectorAll('.escolha');
botoesEscolha.forEach(botao => {
    botao.addEventListener('click', function () {
        // Ao clicar no botão, obtenha o valor do botão clicado
        const valorBotaoClicado = JSON.parse(botao.getAttribute('value'));

        // Você pode fazer o que quiser com o valor do botão clicado aqui
        localStorage.setItem("resp1", JSON.stringify(valorBotaoClicado));
    });
});

// Função para enviar a resposta
function enviar(valorBotaoClicado) {
    let valor = localStorage.getItem('resp1');
    // window.location.href = "../pergunta2/index.html"
}

function carregar() {

}