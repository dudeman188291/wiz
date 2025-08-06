// Dark mode toggle
const toggleBtn = document.getElementById("toggle-dark");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  // Save preference in localStorage
  if(document.body.classList.contains("dark-mode")){
    localStorage.setItem("wiz-dark-mode", "true");
  } else {
    localStorage.removeItem("wiz-dark-mode");
  }
});

// Load saved preference on page load
if(localStorage.getItem("wiz-dark-mode") === "true"){
  document.body.classList.add("dark-mode");
}
