$(document).ready(function() {
  $('.navbar .dropdown').hover(function() {
    if (window.innerWidth >= 992) {
      $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(200);
    }
  }, function() {
    if (window.innerWidth >= 992) {
      $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(200);
    }
  });
  $('.dropdown-menu a').click(function() {
    $('.navbar-collapse').collapse('hide');
  });
document.addEventListener('DOMContentLoaded', function () {
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle'); 
  document.addEventListener('click', function (e) {
    const openDropdowns = document.querySelectorAll('.dropdown-menu.show');
    openDropdowns.forEach(menu => {
      if (!menu.contains(e.target)) {
        bootstrap.Dropdown.getInstance(menu.closest('.dropdown-toggle')).hide();
      }
    });
  });
});
$('.overlay').fadeIn(1500, function () {
  $('.hero-title').slideDown(800);
  $('.hero-subtitle').delay(400).fadeIn(800);
  $('.btn-hero').delay(800).fadeIn(800);
});
$('.clase-card').hover(
  function () {
    $(this).stop().animate({
      marginTop: "-10px",
      transform: "scale(1.05)"
    }, {
      step: function (now, fx) {
        if (fx.prop === "transform") {
          $(this).css('transform', 'scale(1.05)');
        }
      },
      duration: 200
    });
  },
  function () {
    $(this).stop().animate({
      marginTop: "0px",
      transform: "scale(1)"
    }, {
      step: function (now, fx) {
        if (fx.prop === "transform") {
          $(this).css('transform', 'scale(1)');
        }
      },
      duration: 200
    });
  }
);

let target = 1000; 
let current = 0; 
let increment = 10; 
let intervalTime = 50; 

let counter = setInterval(function() {
  if (current + increment >= target) {
      current = target;
      $('#count').text(current);
      clearInterval(counter);
    } else {
      current += increment;
      $('#count').text(current);
    }
}, intervalTime);

$('#carouselExample').carousel({
  interval: 3000, 
  pause: 'hover', 
  ride: 'carousel', 
  wrap: true 
});
$('#newsletterForm').on('submit', function(e) {
e.preventDefault();
$('#newsletterSpinner').removeClass('d-none'); 

setTimeout(function() {
  $('#newsletterSpinner').addClass('d-none'); 
  $('#newsletterForm')[0].reset(); 
}, 2000); 
});
});