// Vendors
//import "./vendor/jquery";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "popper.js/dist/popper.min.js";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";

import "@scss/main.scss";

$(document).ready(function () {
  console.log("Test jquery");

  // $("#arrow-down, .home-banner").on("click", function (event) {
  //   if (this.hash !== "") {
  //     event.preventDefault();

  //     var hash = this.hash;

  //     $("html, body").animate(
  //       {
  //         scrollTop: $(hash).offset().top + 8,
  //       },
  //       800
  //     );
  //   }
  // });

  $(".home-banner").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".x85lsu8lZie").offset().top,
      },
      1000
    );
  });

  $("#arrow-down").click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $("#donate-now").offset().top,
      },
      1000
    );
  });

  $(".payment-method-option").on("click", function () {
    var paymentValue = $(this).find("input").val();

    $('input:radio[name="payment-method"]').val([paymentValue]);

    $(".payment-method-option").each(function (index, value) {
      if (paymentValue === $(value).find("input").val()) {
        $(this).addClass("selected");
      } else {
        $(this).removeClass("selected");
      }
    });
  });

  // carousel
  $(".nonloop").owlCarousel({
    loop: true,
    dots: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
    },
  });

  // hide scroll
  $(window).scroll(function () {
    var threshold = 200; // number of pixels before bottom of page that you want to start fading
    var op =
      ($(document).height() - $(window).height() - $(window).scrollTop()) /
      threshold;
    if (op <= 0) {
      $("#arrow-down").hide();
    } else {
      $("#arrow-down").show();
    }
    $("#arrow-down").css("opacity", op);
  });

  console.log($(".counter-btn").next().val());

  // incrementer
  $(".counter-btn").on("click", function () {
    var $button = $(this);
    var oldValue = $('input[name="quantity"]').val();

    if ($button.find("i").hasClass("fa-plus")) {
      var newVal = parseFloat(oldValue) + 1;
      console.log(newVal);
    } else {
      // Don't allow decrementing below 1
      if (oldValue > 1) {
        console.log("true");
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 1;
        $(".input-group-append").css("pointer-events", "none");
      }
    }

    $('input[name="quantity"]').val(newVal);
  });
});
