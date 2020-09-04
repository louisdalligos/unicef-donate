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
});
