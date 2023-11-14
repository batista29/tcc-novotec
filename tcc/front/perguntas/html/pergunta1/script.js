let perguntaRespondida = false;

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

function enviarResposta(valor) {
    if (!document.querySelector('.botaoSelecionado')) {
        const respostaModal = document.getElementById('respostaModal');
        const respostaModalMessage = document.getElementById('resposta-modal-message');

        if (valor === 1) {
            respostaModalMessage.innerText = "Certa! Parabéns!";
            respostaModalMessage.style.color = "green";
        } else {
            respostaModalMessage.innerText = "Questão errada! Depois tente novamente.";
            respostaModalMessage.style.color = "red";
        }

        respostaModal.style.display = "flex";

        setTimeout(function() {
            respostaModal.style.display = "none";
            window.location.href = "../pergunta2/index.html";
        }, 2000);
    } else {
        console.log("Por favor, selecione uma opção antes de continuar ou a pergunta já foi respondida.");
    }
}

function fecharRespostaModal() {
    const respostaModal = document.getElementById('respostaModal');
    respostaModal.style.display = "none";
}