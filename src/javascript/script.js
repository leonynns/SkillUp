// garante o carragamento do html antes do script
$(document).ready(function(){
    // menu mobile
      // quando o botão com id correspondente for clicado executa a função
      $('#mobile_btn').on('click', function (){
          // adiciona ou remove a class "active"
          $('#mobile_menu').toggleClass('active');
          // troca a class 
          $('#mobile_btn').find('i').toggleClass('fa-x');
      });
  
  });

// troca de menu navbar
$(document).ready(function () {
    // ao clicar em qualquer nav-item
    $('.nav-item').on('click', function () {
      // remove 'active' de todos
      $('.nav-item').removeClass('active');
      
      // adiciona 'active' apenas ao clicado
      $(this).addClass('active');
    });
  });

// abre arquivos pdfs
$(document).ready(function() {
    $('#btnPorque').on('click', function() {
      window.open("src/arquivos/Causa Raiz - 5 porquês.pdf", "_blank");
    });
  
    $('#btnCanva').on('click', function() {
      window.open("src/arquivos/canvas-entendimento.pdf", "_blank");
    });
  
    $('#btnUser').on('click', function() {
      window.open("src/arquivos/User Stories  Atualizado.pdf", "_blank");
    });
  
    $('#btnMap').on('click', function() {
      window.open("src/arquivos/Plantilla Mapa de Empatía.pdf", "_blank");
    });
  });
  