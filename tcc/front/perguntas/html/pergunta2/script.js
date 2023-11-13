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
            localStorage.setItem("resp2", valorBotaoClicado);
        });
    });
}

function enviar() {
    const botaoSelecionado = document.querySelector('.botaoSelecionado');
    if (botaoSelecionado) {
        const valorBotaoClicado = botaoSelecionado.getAttribute('value');
        if (valorBotaoClicado === "1") {
            mostrarRespostaModal("Certa! Parabéns!", "green");
        } else {
            mostrarRespostaModal("Questão errada! Depois tente novamente.", "red");
        }
    } else {
        console.log("Por favor, selecione uma opção antes de continuar.");
    }
}

function mostrarRespostaModal(message, color) {
    const respostaModal = document.getElementById('respostaModal');
    const respostaModalMessage = document.getElementById('resposta-modal-message');
    respostaModalMessage.innerText = message;
    respostaModalMessage.style.color = color;
    respostaModal.style.display = "block";

    setTimeout(function() {
        respostaModal.style.display = "none";
        window.location.href = "../pergunta3/index.html";
    }, 2000);
}

function fecharRespostaModal() {
    const respostaModal = document.getElementById('respostaModal');
    respostaModal.style.display = "none";
}
