function carregar() {
    // Selecione todos os botões com a classe 'escolha' e adicione um evento de clique a cada um
    const botoesEscolha = document.querySelectorAll('.escolha');

    botoesEscolha.forEach(botao => {
        botao.addEventListener('click', function () {
            // Remova a classe 'botaoSelecionado' de todos os botões
            botoesEscolha.forEach(b => {
                b.classList.remove('botaoSelecionado');
            });

            // Adicione a classe 'botaoSelecionado' ao botão clicado
            botao.classList.add('botaoSelecionado');

            // Ao clicar no botão, obtenha o valor do botão clicado
            const valorBotaoClicado = botao.getAttribute('value');

            // Você pode fazer o que quiser com o valor do botão clicado aqui
            localStorage.setItem("resp1", valorBotaoClicado);
        });
    });
}

function enviar() {
    // Verifique se algum botão foi selecionado
    const botaoSelecionado = document.querySelector('.botaoSelecionado');
    if (botaoSelecionado) {
        // Se um botão foi selecionado, envie a resposta e mude para a próxima tela
        window.location.href = "../pergunta2/index.html";
    } else {
        // Se nenhum botão foi selecionado, exiba uma mensagem de erro ou faça algo apropriado
        console.log("Por favor, selecione uma opção antes de continuar.");
    }
}