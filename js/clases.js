$(document).ready(function () {
    $('.clase-card, .fila-horario').show();
  
    $('.filter-btn').click(function () {
      var categoria = $(this).data('filter');
  
      $('.filter-btn').removeClass('active');
      $(this).addClass('active');

      if (categoria === 'all') {
        $('.clase-card, .fila-horario').fadeIn().addClass('animate-zoom');
      } else {
        $('.clase-card, .fila-horario').each(function () {
          if ($(this).hasClass(categoria)) {
            $(this).fadeIn().addClass('animate-zoom');
          } else {
            $(this).fadeOut().removeClass('animate-zoom');
          }
        });
      }
    });
  
    $('.zoom-card').on('mouseenter', function () {
      $(this).css({
        'transform': 'scale(1.05)',
        'z-index': '10',
        'transition': 'transform 0.3s ease'
      });
    });
  
    $('.zoom-card').on('mouseleave', function () {
      $(this).css({
        'transform': 'scale(1)',
        'z-index': '1',
        'transition': 'transform 0.3s ease'
      });
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
  