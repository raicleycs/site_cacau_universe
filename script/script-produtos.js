function realizarCompra(nomeTrufa) {
    // Simula uma animação de compra realizada com sucesso
    exibirMensagemCompraSucesso(nomeTrufa);
}

function exibirMensagemCompraSucesso(nomeTrufa) {
    // Cria um elemento div para exibir a mensagem
    var mensagemDiv = document.createElement('div');
    mensagemDiv.className = 'mensagem-compra-sucesso';
    mensagemDiv.innerHTML = 'Compra da trufa ' + nomeTrufa + ' realizada com sucesso!';

    // Adiciona a mensagem ao elemento de container de trufas
    var containerTrufas = document.getElementById('trufas-container');
    containerTrufas.appendChild(mensagemDiv);

    // Remove a mensagem após 2 segundos
    setTimeout(function() {
        containerTrufas.removeChild(mensagemDiv);
    }, 2000);
}