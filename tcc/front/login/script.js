// Função para salvar informações no localStorage
function salvarInformacoes(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Obtém os valores dos campos de entrada
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Salva os valores no localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    // Redireciona para outra página ou executa outra ação, se necessário
    // window.location.href = "outra_pagina.html";

    window.location.href = '../pag1/index.html'
}
