$(document).ready(function() {
    // Cuando se hace clic en un botón de filtro
    $(".filter-btn").on("click", function() {
      // Añadir o quitar la clase "active" en los botones
      $(".filter-btn").removeClass("active");
      $(this).addClass("active");
      
      // Obtener el valor del filtro seleccionado
      var filter = $(this).attr("data-filter");
      
      // Si el filtro es "todos", mostrar todos los artículos
      if (filter === "all") {
        $(".articulo").show(); 
      } else {
        // Filtrar los artículos según el atributo "data-tags"
        $(".articulo").each(function() {
          var tags = $(this).data("tags"); // Obtener el valor de "data-tags"
          
          // Si el artículo contiene el tag del filtro, se muestra
          if (tags.includes(filter)) {
            $(this).show(); 
          } else {
            $(this).hide(); // Si no, se oculta
          }
        });
      }
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

  document.addEventListener("DOMContentLoaded", () => {
    const articulos = document.querySelectorAll(".articulo");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible"); // Si querés que se anime al salir y volver a entrar
        }
      });
    }, {
      threshold: 0.1 // porcentaje del elemento visible para activarse
    });

    articulos.forEach(articulo => {
      observer.observe(articulo);
    });
  });
  ScrollReveal().reveal('.articulo', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 200,
    reset: true
  });
  
  ScrollReveal().reveal('.titulo', {
    origin: 'top',
    distance: '100px',
    duration: 1500,
    delay: 400,
    reset: true
  });
  
  });
  