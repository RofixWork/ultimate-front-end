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

// fullScreen

const toggleFullScreen = document.querySelector(".icon__fullscreen");

toggleFullScreen.addEventListener("click", (e) => {
  e.target.classList.toggle("full-screen");

  if (e.target.classList.contains("full-screen")) {
    openFullscreen();
  } else {
    closeFullscreen();
  }
});

/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE11 */
    document.msExitFullscreen();
  }
}

// settings box
const settingsBox = document.querySelector(".settings__box");
const iconOpenSettingsBox = document.querySelector(".icon__settings__box");

iconOpenSettingsBox.addEventListener("click", () => {
  iconOpenSettingsBox.firstElementChild.classList.toggle("fa-spin");
  settingsBox.classList.toggle("open_settings__box");
});

// chhange colors

const listsColors = Array.from(
  document.querySelectorAll(".color__option ul > li")
);

const allColors = Array.from([]);

listsColors.forEach((listColor) => {
  allColors.push(listColor.dataset.theme);

  listColor.addEventListener("click", () => {
    const colorTheme = listColor.dataset.theme;
    allColors.forEach((color) => {
      document.body.classList.remove(color);
    });
    document.body.classList.add(colorTheme);
  });
});
