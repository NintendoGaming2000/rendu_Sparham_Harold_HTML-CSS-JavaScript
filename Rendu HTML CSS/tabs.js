function darkMode() {
  let element = document.body;
  let content = document.getElementById("DarkModetext");
  element.className = "dark-mode";
  content.innerText = "Dark Mode is ON";
}

function lightMode() {
  let element = document.body;
  let content = document.getElementById("DarkModetext");
  element.className = "light-mode";
  content.innerText = "Dark Mode is OFF";
}

const tabs = document.querySelectorAll(".tab");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    if (document.querySelector(".content.active")) {
      document.querySelector(".content.active").classList.remove("active");
    }
    document.querySelector(".tab-active").classList.remove("tab-active");
    tab.classList.add("tab-active");

    document
      .querySelector(`.content.${tab.dataset.house}`)
      .classList.add("active");
  });
});
