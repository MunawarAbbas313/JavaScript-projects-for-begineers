const Dark = document.querySelector("#Dark")
const Body = document.querySelector("body")

let isDark = false;

Dark.addEventListener("click", function(){
  if (isDark) {
    Body.style.backgroundColor = "rgba(107, 100, 100, 0.52)";
    Dark.style.backgroundColor = "black";
    Dark.style.color = "white";
    Dark.textContent = "Dark";
    isDark = false;
  } else {
    Body.style.backgroundColor = "black";
    Dark.style.backgroundColor = "white";
    Dark.style.color = "black";
    Dark.textContent = "Light";
    isDark = true;
  }
})