// Vendors
import "./vendor/jquery";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "popper.js/dist/popper.min.js";

import "@scss/main.scss";

$(document).ready(function () {
  console.log("Test jquery");

  $("#arrow-down, #cta-donate").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top + 8,
        },
        800
      );
    }
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
});
