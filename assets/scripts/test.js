new Splide("#similar-carousel", {
  type: "loop",
  perPage: 4,
  gap: 18,
  autoWidth: true,
  perMove: 1,
  autoplay: false,
  pagination: false,
  arrows: true,
  breakpoints: {
    1200: { perPage: 4 },
    640: { perPage: 1 },
  },
}).mount();

$(".accordion-button").on("click", function () {
  var $accordionItem = $(this).closest(".accordion-item");
  var $accordionContent = $accordionItem.find(".accordion-content");

  if ($accordionItem.hasClass("active")) {
    // Close the accordion item
    $accordionContent.stop(true, true).slideUp(500); // Smooth close
    $accordionItem.removeClass("active");
  } else {
    // Close all accordion items
    $(".accordion-item")
      .removeClass("active")
      .find(".accordion-content")
      .stop(true, true)
      .slideUp(500);

    // Open the clicked accordion item
    $accordionItem.addClass("active");
    $accordionContent.stop(true, true).slideDown(500); // Smooth open
  }
});

const $infoBtn = $(".info-btn");
const $popup = $(".product-popup");
const $popup_overlay = $(".overlay");
const $closePopupButton = $("#closePopup");

// When the 'info-btn' is clicked, open the popup
$infoBtn.on("click", function () {
  $popup.addClass("active"); // Add 'active' class to popup
  $popup_overlay.addClass("active"); // Add 'active' class to overlay
});

// Close the popup when the overlay is clicked or the close button is clicked
$popup_overlay.on("click", closePopup);
$closePopupButton.on("click", closePopup);

// Function to close the popup
function closePopup() {
  $popup.removeClass("active");
  $popup_overlay.removeClass("active");
}
