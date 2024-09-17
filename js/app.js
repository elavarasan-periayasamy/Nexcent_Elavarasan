

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
const $wrapper = $('.clients_wrapper');
const $slides = $wrapper.children('span');
const slideCount = $slides.length;
const slideWidth = $slides.outerWidth(true);
const slideDuration = 3000; 
let currentIndex = 0;


$wrapper.append($slides.first().clone());

function moveSlide() {
  $wrapper.css('transform', 'translateX(' + (-currentIndex * slideWidth) + 'px)');
  currentIndex++;
  if (currentIndex >= slideCount) {
    
    setTimeout(function() {
      $wrapper.css('transition', 'none');
      $wrapper.css('transform', 'translateX(0)');
      currentIndex = 0;
      setTimeout(function() {
        $wrapper.css('transition', 'transform 0.5s ease');
      }, 20); 
    }, slideDuration);
  }
}

setInterval(moveSlide, slideDuration);


  $('.clients_wrapper span').click(function() {
    var clientInfo = $(this).data('client-info');
    $('.popup-text').text(clientInfo);
    $('.popup-overlay').fadeIn();
  });


  $('.popup-close, .popup-overlay').click(function() {
    $('.popup-overlay').fadeOut();
  });

  
  $('.popup-content').click(function(event) {
    event.stopPropagation();
  });



});


