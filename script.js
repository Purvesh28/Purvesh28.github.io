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
