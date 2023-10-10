// Selecione todos os botões com a classe 'escolha' e adicione um evento de clique a cada um
const botoesEscolha = document.querySelectorAll('.escolha');
botoesEscolha.forEach(botao => {
    botao.addEventListener('click', function() {
        // Ao clicar no botão, obtenha o valor do botão clicado
        const valorBotaoClicado = botao.getAttribute('value');
        console.log(valorBotaoClicado);
        // Você pode fazer o que quiser com o valor do botão clicado aqui
        localStorage.setItem("resp5", valorBotaoClicado);
    });
});

// Função para enviar a resposta
function enviar(valorBotaoClicado) {
    localStorage.setItem("resp1", null);
    localStorage.setItem("resp2", null);
    localStorage.setItem("resp3", null);
    localStorage.setItem("resp4", null);
    localStorage.setItem("resp5", null);
    window.location.href = "../resultado/index.html"
}
