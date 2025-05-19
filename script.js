document.getElementById("whatsappButton").addEventListener("click", function (e) {
  e.preventDefault();
  
  const numero = "5511999999999"; // Substitua pelo número do fornecedor (com DDI)
  const mensagem = encodeURIComponent("Olá! Gostaria de saber mais sobre as camisetas e bordados.");
  const link = `https://wa.me/${numero}?text=${mensagem}`;
  
  window.open(link, "_blank");
});


