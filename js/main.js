(function ($) {
  "use strict";

  $(window).on("load", function () {
    // Prealoder
    $("#preloader").delay(300).fadeOut("slow");
  });

  $(document).ready(function () {
    //  Back to top button
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 600) {
        $(".back-to-top").fadeIn(200);
      } else {
        $(".back-to-top").fadeOut(200);
      }
    });

    // animation for Back to top button
    $(".back-to-top").on("click", function (event) {
      event.preventDefault();

      $("html, body").animate(
        {
          scrollTop: 0,
        },
        1500
      );
    });

    // Hamburger-menu
    $(".hamburger-menu").on("click", function () {
      $(".hamburger-menu .line-top").toggleClass("current");
      $(".hamburger-menu .line-center").toggleClass("current");
      $(".hamburger-menu .line-bottom").toggleClass("current");
      $(".menu").toggleClass("show");
    });

    // GLP Slider
    $(".glp_slider").owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      smartSpeed: 700,
      nav: false,
      dots: false,
      autoWidth: true,
    });

    $(document).ready(function () {
      $("#openTC").click(function () {
        $(".popupTC").addClass("active");
      });
      $("#overlayTC").click(function () {
        $(".popupTC").removeClass("active");
      });
      $("#closeTC").click(function () {
        $(".popupTC").removeClass("active");
      });
    });

    $(document).ready(function () {
      $("#openAU").click(function () {
        $(".popupAU").addClass("active");
      });
      $("#overlayAU").click(function () {
        $(".popupAU").removeClass("active");
      });
      $("#closeAU").click(function () {
        $(".popupAU").removeClass("active");
      });
    });

    $(document).ready(function () {
      $("#openPP").click(function () {
        $(".popupPP").addClass("active");
      });
      $("#overlayPP").click(function () {
        $(".popupPP").removeClass("active");
      });
      $("#closePP").click(function () {
        $(".popupPP").removeClass("active");
      });
    });

    $(document).ready(function () {
      $("#openTH").click(function () {
        $(".popupTH").addClass("active");
      });
      $("#overlayTH").click(function () {
        $(".popupTH").removeClass("active");
      });
      $("#closeTH").click(function () {
        $(".popupTH").removeClass("active");
      });
    });
  });
})(jQuery);


// ANIMATION FOR HERO HEADING
document.addEventListener("DOMContentLoaded", function () {
  const headings = [
    "Science Backed. Doctor Approved.", 
    "GLP-1 Medication Delivered to Your Door.",
    "Real Medications. Real Doctors. Real Results.", 
    "People Don't Fail Diets. Diets Fail People!",
    "Designed For Your Biology. Not Willpower.",
    "Diets Built on Rules Fail Hard - and Fast.",
	"Start Today, You'll Be Thinner Tomorrow!",
	"Sucess Starts With A Single Choice!",
	"Your Best Self Is One Decision Away.",
	"Don't Weight For Change; Create It.",
    // Add more headings here
  ];

  let currentIndex = 0;
  const headingElement = document.querySelector(".title_xl");

  function fadeOut() {
    headingElement.style.opacity = 0;
    setTimeout(() => {
      fadeIn();
    }, 1000);
  }

  function fadeIn() {
    currentIndex = (currentIndex + 1) % headings.length;
    headingElement.innerHTML = headings[currentIndex];
    headingElement.style.opacity = 1;
    headingElement.style.transition = "opacity 1s ease-in-out";
    setTimeout(() => {
      fadeOut();
    }, 5000); // Seconds before fading out
  }

  fadeOut(); // Start the initial fade out
});
