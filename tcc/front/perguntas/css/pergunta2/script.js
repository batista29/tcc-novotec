// Selecione todos os botões com a classe 'escolha' e adicione um evento de clique a cada um
const botoesEscolha = document.querySelectorAll('.escolha');
botoesEscolha.forEach(botao => {
    botao.addEventListener('click', function() {
        // Ao clicar no botão, obtenha o valor do botão clicado
        const valorBotaoClicado = botao.getAttribute('value');

        // Você pode fazer o que quiser com o valor do botão clicado aqui
        localStorage.setItem("resp2", valorBotaoClicado);
    });
});

// Função para enviar a resposta
function enviar(valorBotaoClicado) {
    window.location.href = "../pergunta3/index.html"
}