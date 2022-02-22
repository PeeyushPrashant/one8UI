const drawerBtn = document.querySelector("#data-drawar");
const drawer = document.querySelector(".drawar");
const backdrop = document.querySelector(".backdrop");

if (drawerBtn) {
  drawerBtn.addEventListener("click", () => {
    backdrop.style.display = "block";
    drawer.style.transform = "translateX(0)";
  });
}

backdrop.addEventListener("click", () => {
  backdrop.style.display = "none";
  drawer.style.transform = "translateX(-100%)";
});
