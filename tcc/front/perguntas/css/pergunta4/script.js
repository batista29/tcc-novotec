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
            localStorage.setItem("resp4", valorBotaoClicado);
        });
    });
}

function enviar() {
    const botaoSelecionado = document.querySelector('.botaoSelecionado');
    if (botaoSelecionado) {
        const valorBotaoClicado = botaoSelecionado.getAttribute('value');
        if (valorBotaoClicado === "1") {
            showModal("Certa! Parabéns!", "green");
        } else {
            showModal("Questão errada! Depois tente novamente.", "red");
        }
    } else {
        console.log("Por favor, selecione uma opção antes de continuar.");
    }
}

function showModal(message, color) {
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modal-message');
    modalMessage.innerText = message;
    modalMessage.style.color = color;
    modal.style.display = "block";

    setTimeout(function() {
        modal.style.display = "none";
        window.location.href = "../pergunta5/index.html";
    }, 2000);
}

const closeBtn = document.querySelector('.close');
closeBtn.addEventListener('click', function() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
});