$(document).ready(function() {
    $('.card-flip').hover(function() {
      $(this).find('.barra .progreso').each(function() {
        var porcentaje = $(this).data('porcentaje'); 
        $(this).animate({ width: porcentaje }, 1000); 
      });
      $(this).find('.estrellas').each(function() {
        var rating = $(this).data('rating'); 
        var stars = $(this).find('i');
        for (var i = 0; i < stars.length; i++) {
          if (i < rating) {
            $(stars[i]).animate({ opacity: 1 }, 500);
          } else {
            $(stars[i]).animate({ opacity: 0.3 }, 500); 
          }
        }
      });
    }, function() {
      $(this).find('.barra .progreso').animate({ width: 0 }, 500); 
      $(this).find('.estrellas i').animate({ opacity: 0.3 }, 500); 
    });
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
    $('#newsletterForm').on('submit', function(e) {
        e.preventDefault();
        $('#newsletterSpinner').removeClass('d-none'); 
        
        setTimeout(function() {
          $('#newsletterSpinner').addClass('d-none'); 
          $('#newsletterForm')[0].reset(); 
        }, 2000); 
        });
  });
  