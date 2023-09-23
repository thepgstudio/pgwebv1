(function initTheme() {
  const theme = localStorage.getItem("theme") || "light";
  console.log("running!")
  if (theme === "dark") {
    document.querySelector("html").classList.add("dark");
  }
})();
