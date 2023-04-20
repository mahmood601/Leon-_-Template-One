let icons = document.querySelectorAll(".animation"),
    year = document.querySelector(".footer .year");

icons.forEach(icon => {

  icon.onclick = () => {
    icon.style.setProperty("transform", "rotate(360deg)");
    setTimeout(() => {
        icon.removeAttribute("style");
    },800)
  }
})

year.textContent = new Date().getFullYear();
