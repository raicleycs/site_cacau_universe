function adicionarAoCarrinho() {
    var mensagemCarrinho = document.getElementById("mensagemCarrinho");
  
    // Exibir mensagem
    mensagemCarrinho.innerHTML = "Adicionado ao carrinho!";
    mensagemCarrinho.style.display = "block";
  
    // Ocultar mensagem após 3 segundos
    setTimeout(function() {
      mensagemCarrinho.style.display = "none";
    }, 3000);
  }



