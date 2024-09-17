
$(document).ready(function() {



  $(window).scroll(function(){
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });

  //menu

  const nav = document.querySelector(".mobile_nav_list");
  const burger = document.querySelector(".mobile-nav-btn");
  
  burger.addEventListener("click", () => {
    nav.classList.toggle("show_mobile_nav");
  });



//slider
var $clientsWrapper = $('.clients_wrapper');
var $clients = $clientsWrapper.children().clone();
$clientsWrapper.append($clients);
var totalWidth = $clientsWrapper.children().length * $clientsWrapper.children().first().outerWidth(true);
$('.clients_wrapper').css('width',`100%`); 
$('.clients_wrapper').css('animation-duration', '15s'); 



//tooltip client section
   // When a client logo is clicked
   $('.client_logo').click(function() {
    var info = $(this).parent().attr('data-info'); 
    $('#modalText').text(info); 
    $('#infoModal').show(); 
  });


  $('.close').click(function() {
    $('#infoModal').hide(); 
  });


  $(window).click(function(event) {
    if ($(event.target).is('#infoModal')) {
      $('#infoModal').hide(); 
    }
  });


  
});
 



