document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider");
    let counter = 0;
  
    function nextSlide() {
      if (counter < 2) {
        counter++;
      } else {
        counter = 0;
      }
      updateSlide();
    }
  
    function prevSlide() {
      if (counter > 0) {
        counter--;
      } else {
        counter = 2;
      }
      updateSlide();
    }
  
    function updateSlide() {
      const translateValue = -counter * 300; // Adjust based on image width
      slider.style.transform = `translateX(${translateValue}px)`;
    }
  
    setInterval(nextSlide, 3000); // Change slide every 3 seconds
  });
  