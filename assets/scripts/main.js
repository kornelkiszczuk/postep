// form
const inputs = document.querySelectorAll("form input, form textarea");

inputs.forEach((input) => {
  input.addEventListener("click", () => {
    input.classList.add("clicked"); // Dodanie klasy po kliknięciu
  });

  input.addEventListener("blur", () => {
    if (!input.value) {
      input.classList.remove("clicked"); // Usunięcie klasy, jeśli pole jest puste
    }
  });
});
//

// video

const $video = $("#techVideo");
const $overlay = $("#videoOverlay");

$overlay.click(function () {
  $video.get(0).play();
  $overlay.fadeOut(); // Hide overlay when playing
});

$video.click(function () {
  $video.get(0).pause();
  $overlay.fadeIn(); // Show overlay when paused
});
//

// categories
$(".tech-categories-btns button").on("click", function () {
  // Remove 'active' class from all buttons
  $(".tech-categories-btns button").removeClass("active");

  // Add 'active' class to the clicked button
  $(this).addClass("active");

  // Get the data attribute of the clicked button
  var category = $(this).data("categorie");

  // Hide all content sections
  $(".tech-categories-content").hide();

  // Show the corresponding content section
  $('.tech-categories-content[data-content="' + category + '"]').fadeIn();
});

// Initial setup to show the first content section
$(".tech-categories-content").hide();
$('.tech-categories-content[data-content="first"]').show();
//

// splide
var splide = new Splide("#main-carousel", {
  type: "loop",
  perPage: 1,
  perMove: 1,
  autoplay: true,
  pagination: true,
  arrows: true,
}).mount();

// anmations

AOS.init({
  once: true, // Animation runs only once
});

function checkInView() {
  $(".eni-imgs-anim").each(function () {
    const elementTop = $(this).offset().top;
    const elementHeight = $(this).outerHeight();
    const elementMiddle = elementTop + elementHeight / 2; // Calculate middle of the element
    const viewportTop = $(window).scrollTop();
    const viewportBottom = viewportTop + $(window).height();

    if (
      elementMiddle < viewportBottom &&
      elementMiddle > viewportTop &&
      !$(this).hasClass("in-view")
    ) {
      const $this = $(this);
      setTimeout(function () {
        $this.addClass("in-view");
      }, 300); // Delay before animation, adjust as needed
    }
  });
}

$(window).on("scroll resize", checkInView);
checkInView(); // Trigger on page load
//

// product
// accordion
