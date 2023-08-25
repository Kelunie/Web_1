document.addEventListener("DOMContentLoaded", function () {
  let mainFoto = document.getElementById("mainFoto");
  let carouselImages = Array.from(document.querySelectorAll(".imgCarousel"));

  function updateImage(event) {
    let image = event.target;
    mainFoto.src = image.src;
  }

  carouselImages.forEach(function (image) {
    image.addEventListener("click", updateImage);
  });
});

$(document).ready(function () {
  $("#calificacionEstrellas").rateYo({
    rating: 0,
    fullStar: true,
    ratedFill: "#007483",
    onSet: function (rating, rateYoInstance) {
      $("#calificacion").val(rating);
    },
  });

  $(".reseñaBtn").click(function () {
    $("#calificacionEstrellas").rateYo("rating", 0);
    $("#reseña").val("");

    alert("¡Reseña enviada!, Tu opinión ha sido registrada.");
  });
});
