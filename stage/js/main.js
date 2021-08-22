const sidebar = document.querySelector(".sidebar");
const iconToggleSidebar = document.querySelector(".toggle-sidebar");
const mainContent = document.querySelector(".content-area");
iconToggleSidebar.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  mainContent.classList.toggle("active");
});
