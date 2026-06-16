

    /* CAROUSEL */

    const slides = document.getElementById("slides");
    const slideCount = document.querySelectorAll(".slide").length;
    const dotsContainer = document.getElementById("dots");

    let currentSlide = 0;

    // CREATE DOTS

    for(let i = 0; i < slideCount; i++){

      const dot = document.createElement("div");

      dot.classList.add("dot");

      if(i === 0){
        dot.classList.add("active");
      }

      dot.addEventListener("click", () => {

        currentSlide = i;
        updateCarousel();

      });

      dotsContainer.appendChild(dot);

    }

    const dots = document.querySelectorAll(".dot");

    function updateCarousel(){

      slides.style.transform =
        `translateX(-${currentSlide * 100}%)`;

      dots.forEach(dot => {
        dot.classList.remove("active");
      });

      dots[currentSlide].classList.add("active");

    }

    function moveSlide(direction){

      currentSlide += direction;

      if(currentSlide >= slideCount){
        currentSlide = 0;
      }

      if(currentSlide < 0){
        currentSlide = slideCount - 1;
      }

      updateCarousel();

    }

    /* SWIPE SUPPORT */

    let startX = 0;

    slides.addEventListener("touchstart", e => {

      startX = e.touches[0].clientX;

    });

    slides.addEventListener("touchend", e => {

      let endX = e.changedTouches[0].clientX;

      if(startX - endX > 50){
        moveSlide(1);
      }

      if(endX - startX > 50){
        moveSlide(-1);
      }

    });

  