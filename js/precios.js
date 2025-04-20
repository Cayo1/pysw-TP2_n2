$(document).ready(function () {
    // Tooltips Bootstrap
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach(t => new bootstrap.Tooltip(t));
  
    // Cambiar precios con animación
    $('#togglePrecios').on('change', function () {
      const anual = $(this).is(':checked');
  
      $('.precio').each(function () {
        const $precioTd = $(this);
        const nuevoPrecio = anual ? $precioTd.data('anual') : $precioTd.data('mensual');
  
        $precioTd.fadeOut(200, function () {
          $precioTd.text(`$${nuevoPrecio}`);
          $precioTd.fadeIn(200);
        });
      });
    });
  
    // Resaltado fila y columna
    $('#tablaPrecios td').on('click', function () {
      $('#tablaPrecios td, #tablaPrecios th').removeClass('highlight');
  
      const colIndex = $(this).index();
      const $row = $(this).parent();
  
      $row.children().addClass('highlight');
  
      $('#tablaPrecios tr').each(function () {
        $(this).children().eq(colIndex).addClass('highlight');
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
  });
  