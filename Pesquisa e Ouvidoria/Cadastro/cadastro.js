document.addEventListener("DOMContentLoaded", function() {
    // Seleciona o formulário de cadastro
    var cadastroForm = document.getElementById("cadastro-form");

    // Adiciona um evento de escuta para o envio do formulário de cadastro
    cadastroForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita o envio padrão do formulário
        
        // Validação dos campos do formulário
        var email = document.getElementById("email").value;
        var nome = document.getElementById("nome").value;
        var sobrenome = document.getElementById("sobrenome").value;
        var telefone = document.getElementById("telefone").value;
        var login = document.getElementById("login").value;
        var senha = document.getElementById("senha").value;
        var uf = document.getElementById("uf").value;

        // Exemplo de validação simples (verifica se os campos estão preenchidos)
        if (email === "" || nome === "" || sobrenome === "" || telefone === "" || login === "" || senha === "" || uf === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        // Se todos os campos estiverem preenchidos, você pode prosseguir com o envio do formulário
        // Aqui você pode adicionar lógica adicional, como enviar os dados para o servidor

        // Exemplo de envio dos dados para o servidor usando fetch API
        // Você precisará substituir a URL com a URL real do seu servidor
        fetch("url-do-servidor-de-cadastro", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                nome: nome,
                sobrenome: sobrenome,
                telefone: telefone,
                login: login,
                senha: senha,
                uf: uf
            })
        })
        .then(function(response) {
            if (response.ok) {
                // Aqui você pode lidar com a resposta do servidor, como exibir uma mensagem de sucesso
                alert("Cadastro realizado com sucesso!");
            } else {
                // Se houver um erro no servidor, você pode exibir uma mensagem de erro
                alert("Erro ao cadastrar. Por favor, tente novamente mais tarde.");
            }
        })
        .catch(function(error) {
            // Se ocorrer um erro ao fazer a solicitação, você pode exibir uma mensagem de erro
            console.error("Ocorreu um erro:", error);
            alert("Ocorreu um erro ao cadastrar. Por favor, tente novamente mais tarde.");
        });
    });
});