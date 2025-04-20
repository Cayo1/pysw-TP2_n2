$(document).ready(function () {
    $('#form-contacto input, #form-contacto textarea').on('input', function () {
      const input = $(this);
      if (input[0].checkValidity()) {
        input.removeClass('is-invalid').addClass('is-valid');
      } else {
        input.removeClass('is-valid').addClass('is-invalid');
      }
    });
    $('#form-contacto').on('submit', function (e) {
      e.preventDefault();
      let valido = true;
      $('#form-contacto input, #form-contacto textarea').each(function () {
        if (!this.checkValidity()) {
          $(this).addClass('is-invalid');
          valido = false;
        }
      });
      if (!valido) return;
      $('#spinner').fadeIn();
      setTimeout(function () {
        $('#spinner').fadeOut();
        $('#form-contacto')[0].reset();
        $('#form-contacto input, #form-contacto textarea').removeClass('is-valid');
        const modal = new bootstrap.Modal($('#modalConfirmacion'));
        modal.show();
      }, 2000);
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