window.addEventListener('DOMContentLoaded', () => {
  "use strict";
  const slider = document.getElementById("slider");
  if (slider) {
    const incomeDisplay = document.getElementById("income");
    const track = document.getElementById("track");

    function updateTrackWidth() {
      const percentage = (slider.value - slider.min) / (slider.max - slider.min) * 100;
      track.style.width = percentage + '%';
    }

    updateTrackWidth();
    incomeDisplay.textContent = slider.value;

    slider.addEventListener("input", function () {
      incomeDisplay.textContent = slider.value;
      updateTrackWidth();
    });
  }

  // accordion

  const accordions = document.querySelectorAll(".accordion");

  if (accordions) {
    if (accordions.length > 0) {
      accordions[0].querySelector(".accordion-body").classList.add("active");
      accordions[0].querySelector(".accordion-header").classList.add("active");
    }

    accordions.forEach((accordion) => {
      const accordionHeader = accordion.querySelector(".accordion-header");
      const accordionContent = accordion.querySelector(".accordion-body");

      accordionHeader.addEventListener("click", function () {
        accordions.forEach((otherAccordion) => {
          const otherHeader = otherAccordion.querySelector(".accordion-header");
          const otherContent = otherAccordion.querySelector(".accordion-body");

          if (otherAccordion !== accordion) {
            otherContent.classList.remove("active");
            otherHeader.classList.remove("active");
          }
        });
        accordionContent.classList.toggle("active");
        accordionHeader.classList.toggle("active");
      });
    });
  }
})
