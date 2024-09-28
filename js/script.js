window.addEventListener('DOMContentLoaded', () => {
  "use strict";
  // const slider = document.getElementById("slider");
  // const incomeDisplay = document.getElementById("income");

  // // Update income display when the slider is changed
  // slider.addEventListener("input", function () {
  //   incomeDisplay.textContent = slider.value;
  // });
  const slider = document.getElementById("slider");
  const incomeDisplay = document.getElementById("income");
  const track = document.getElementById("track");

  // Function to update the width of the track based on the slider value
  function updateTrackWidth() {
    const percentage = (slider.value - slider.min) / (slider.max - slider.min) * 100;
    track.style.width = percentage + '%';
  }

  // Initial track width and income display setup
  updateTrackWidth();
  incomeDisplay.textContent = slider.value;

  // Update income and track width when the slider is changed
  slider.addEventListener("input", function () {
    incomeDisplay.textContent = slider.value;
    updateTrackWidth();
  });

  // accordion

  const accordions = document.querySelectorAll(".accordion");

  // Birinchi accordionni ochiq qilib qo'yamiz
  if (accordions.length > 0) {
    accordions[0].querySelector(".accordion-body").classList.add("active");
    accordions[0].querySelector(".accordion-header").classList.add("active");
  }

  // Barcha accordionlarni boshqarish
  accordions.forEach((accordion) => {
    const accordionHeader = accordion.querySelector(".accordion-header");
    const accordionContent = accordion.querySelector(".accordion-body");

    accordionHeader.addEventListener("click", function () {
      // Boshqa barcha accordionlarni yopamiz
      accordions.forEach((otherAccordion) => {
        const otherHeader = otherAccordion.querySelector(".accordion-header");
        const otherContent = otherAccordion.querySelector(".accordion-body");

        if (otherAccordion !== accordion) { // Faqat boshqa accordionlarni yopamiz
          otherContent.classList.remove("active");
          otherHeader.classList.remove("active");
        }
      });

      // Bosilgan accordionni ochamiz yoki yopamiz
      accordionContent.classList.toggle("active");
      accordionHeader.classList.toggle("active");
    });
  });
})
