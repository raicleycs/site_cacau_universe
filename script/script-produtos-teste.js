function adicionarAoCarrinho() {
    var mensagemCarrinho = document.getElementById("mensagemCarrinho");
  
    
    mensagemCarrinho.innerHTML = "Adicionado ao carrinho!";
    mensagemCarrinho.style.display = "block";
  
    
    setTimeout(function() {
      mensagemCarrinho.style.display = "none";
    }, 3000);
  }



