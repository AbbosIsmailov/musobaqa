let carouselControlPrevIcon = document.querySelector(".carousel-control-prev-icon");
carouselControlPrevIcon.dataset.bsTarget = "#carouselExampleCaptions";
carouselControlPrevIcon.dataset.bsSlide = "prev";

let carouselControlNextIcon = document.querySelector(".carousel-control-next-icon");
carouselControlNextIcon.dataset.bsTarget = "#carouselExampleCaptions";
carouselControlNextIcon.dataset.bsSlide = "next";

let searchForm = document.querySelector(".search-form");
searchForm.addEventListener("submit", (e) => {
      e.preventDefault()
})