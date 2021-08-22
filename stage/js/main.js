// SIDEBAR TOGGLE
const sidebar = document.querySelector(".sidebar");
const iconToggleSidebar = document.querySelector(".toggle-sidebar");
const mainContent = document.querySelector(".content-area");
iconToggleSidebar.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  mainContent.classList.toggle("active");
});
// MENU TOGGLE
const headMenuLink = Array.from(
  document.querySelectorAll(".sidebar__menuLinks > h3.headLink")
);

headMenuLink.forEach((headLink) => {
  headLink.addEventListener("click", (e) => {
    e.preventDefault();
    const menuLink = document.querySelector(
      `.sidebar__menuLinks .${headLink.dataset.menu}`
    );
    const chevronDirect = document.querySelector(
      `.sidebar__menuLinks .headLink[data-menu=${headLink.dataset.menu}] > .icon-toggle`
    );
    chevronDirect.classList.toggle("rotatechevron");
    menuLink.classList.toggle("active");
  });
});
