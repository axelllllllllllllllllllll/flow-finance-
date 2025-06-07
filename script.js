function showSidebar() {
  const sideBar = document.querySelector(".sidebar");
  sideBar.style.display = "flex";
  sideBar.style.right = "0";

  const overlay = document.querySelector(".overlay");
  overlay.style.width = "100dvw";
}

function hideSidebar() {
  const sideBar = document.querySelector(".sidebar");
  sideBar.style.right = "-1000px";

  const overlay = document.querySelector(".overlay");
  overlay.style.width = "0";
}

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 500) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
