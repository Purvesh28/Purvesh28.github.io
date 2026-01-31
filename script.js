 // ================================
  // DAY / NIGHT THEME TOGGLE
  // ================================

  const toggleBtn = document.getElementById("themeToggle");

  // Load saved theme
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-theme");
    toggleBtn.textContent = "🌞";
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    const isLight = document.body.classList.contains("light-theme");

    toggleBtn.textContent = isLight ? "🌞" : "🌙";
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });



  document.querySelectorAll("[data-slider]").forEach(slider => {
  const track = slider.querySelector(".slider-track");
  const slides = slider.querySelectorAll(".slide-img");
  const prev = slider.querySelector(".left");
  const next = slider.querySelector(".right");

  let index = 0;
  let perView = 3;

  let startX = 0;
  let isDragging = false;

  function updatePerView() {
    if (window.innerWidth < 576) perView = 1;
    else if (window.innerWidth < 992) perView = 2;
    else perView = 3;
  }

  function move() {
    const slideWidth = slides[0].offsetWidth;
    track.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  updatePerView();

  next.onclick = () => {
    if (index < slides.length - perView) index++;
    move();
  };

  prev.onclick = () => {
    if (index > 0) index--;
    move();
  };

  /* TOUCH EVENTS */
  slider.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
    isDragging = true;
  });

  slider.addEventListener("touchend", e => {
    if (!isDragging) return;
    const diff = e.changedTouches[0].clientX - startX;

    if (diff > 50 && index > 0) index--;
    if (diff < -50 && index < slides.length - perView) index++;

    move();
    isDragging = false;
  });

  /* MOUSE DRAG (DESKTOP BONUS) */
  slider.addEventListener("mousedown", e => {
    startX = e.clientX;
    isDragging = true;
  });

  slider.addEventListener("mouseup", e => {
    if (!isDragging) return;
    const diff = e.clientX - startX;

    if (diff > 50 && index > 0) index--;
    if (diff < -50 && index < slides.length - perView) index++;

    move();
    isDragging = false;
  });

  window.addEventListener("resize", () => {
    updatePerView();
    move();
  });
});
